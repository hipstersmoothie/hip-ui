import contentCollections from "@content-collections/vite";
import mdx from "@mdx-js/rollup";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { camelCase } from "change-case";
import dedent from "dedent";
import { glob } from "glob";
import MagicString from "magic-string";
import path from "node:path";
import docgen from "react-docgen-typescript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import { codeToHtml } from "shiki";
import stylexPlugin from "unplugin-stylex/vite";
import { defineConfig, PluginOption } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

/** Generate a virtual model that imports all the content files. */
function content() {
  const virtualModuleId = "virtual:content";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  let files: string[] = [];

  return {
    name: "my-plugin", // required, will show up in warnings and errors
    buildStart: async () => {
      files = await glob("src/docs/**/*.mdx");
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return dedent`
          ${files
            .map((file) => {
              const slug = file.replace("src/", "/").replace(".mdx", "");
              return `import ${camelCase(slug)} from "${path.resolve(file)}";`;
            })
            .join("\n")}

          export const pages = {
            ${files
              .map((file) => {
                const slug = file.replace("src/", "/").replace(".mdx", "");
                return `"${slug}": ${camelCase(slug)},`;
              })
              .join("\n")}
          };
        `;
      }
    },
  } as PluginOption;
}

/** Highlight the code using shiki */
function shiki() {
  return {
    enforce: "pre",
    name: "my-plugin", // required, will show up in warnings and errors
    async transform(code, id) {
      if (id.endsWith("?shiki")) {
        return dedent`
          export default \`${await codeToHtml(code, {
            lang: "tsx",
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          })}\`;
        `;
      }
    },
  } as PluginOption;
}

/** Generate a virtual model that imports all the example as highlighted code */
function examples() {
  const virtualModuleId = "virtual:examples";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  let files: string[] = [];

  return {
    name: "my-plugin", // required, will show up in warnings and errors
    buildStart: async () => {
      files = await glob("src/examples/**/*.tsx");
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return dedent`
          ${files
            .map((file) => {
              const slug = file.replace("src/", "/").replace(".tsx", "");
              return `import ${camelCase(slug)} from "${path.resolve(file)}?shiki";`;
            })
            .join("\n")}

          export const examples = {
            ${files
              .map((file) => {
                const slug = file.replace("src/", "/").replace(".tsx", "");
                return `"${slug}": ${camelCase(slug)},`;
              })
              .join("\n")}
          };
        `;
      }
    },
  } as PluginOption;
}

/** Add the example slug to the example function */
function annotateExamples() {
  let examples: string[] = [];

  return {
    enforce: "pre",
    name: "my-plugin", // required, will show up in warnings and errors
    buildStart: async () => {
      examples = await glob("src/examples/**/*.tsx");
    },

    transform(code, id) {
      const example = examples.find((f) => id.includes(f));

      if (!id.endsWith("?raw") && !id.endsWith("?shiki") && example) {
        const exportName = code.match(/export function (\w+)\(\)/)?.[1];

        if (!exportName) {
          throw new Error(`No export name found in ${id}`);
        }

        const ms = new MagicString(code);

        ms.append(
          `\n\n${exportName}.slug = "${example.replace("src/", "/").replace(".tsx", "")}";`,
        );

        return {
          code: ms.toString(),
          map: ms.generateMap(),
        };
      }
    },
  } as PluginOption;
}

/** Generate a virtual model that imports all the prop docs */
function propDocs() {
  const virtualModuleId = "virtual:propDocs";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  const parser = docgen.withDefaultConfig({
    propFilter: (prop) => {
      if (
        prop.parent?.fileName.includes("@types/react") &&
        prop.name !== "children"
      ) {
        return false;
      }

      if (prop.parent?.fileName.endsWith("/dom.d.ts")) {
        return false;
      }

      return true;
    },
  });
  const docs: docgen.ComponentDoc[] = [];

  return {
    name: "my-plugin", // required, will show up in warnings and errors

    buildStart: async () => {
      const files = await glob(
        path.join(process.cwd(), "src/components/**/*.tsx"),
      );

      for (const file of files) {
        const doc = parser.parse(file);
        docs.push(...doc);
      }
    },

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        const code = dedent`
          export const propDocs = ${JSON.stringify(docs).replaceAll(String.raw`\n`, String.raw`\\n`)};
        `;
        return code;
      }
    },
  } as PluginOption;
}

const config = defineConfig({
  plugins: [
    shiki(),
    stylexPlugin(),
    nitroV2Plugin(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    mdx({
      remarkPlugins: [remarkFrontmatter],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypeShiki,
          {
            themes: { light: "github-light", dark: "github-dark" },
            addLanguageClass: true,
          } as RehypeShikiOptions,
        ],
      ],
    }),
    viteReact(),
    contentCollections(),
    content(),
    examples(),
    annotateExamples(),
    propDocs(),
  ],
});

export default config;
