import contentCollections from "@content-collections/vite";
import { defineConfig, PluginOption } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import stylexPlugin from "unplugin-stylex/vite";
import mdx from "@mdx-js/rollup";
import { glob } from "glob";
import { camelCase } from "change-case";
import dedent from "dedent";
import path from "path";
import remarkFrontmatter from "remark-frontmatter";
import MagicString from "magic-string";
import { codeToHtml } from "shiki";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";

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
  ],
});

export default config;
