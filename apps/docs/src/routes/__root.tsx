import "@/styles/styles.css";

import * as stylex from "@stylexjs/stylex";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { ui, primaryColor } from "../components/theme/semantic-color.stylex";
import { blue } from "../components/theme/colors/blue.stylex";
import { purple } from "../components/theme/colors/purple.stylex";

if (import.meta.env.DEV) {
  import("virtual:stylex:runtime");
}

const styles = stylex.create({
  body: {
    margin: 0,
  },
  themeBlue: {
    [primaryColor.bg]: blue.bg,
    [primaryColor.bgSubtle]: blue.bgSubtle,
    [primaryColor.component1]: blue.component1,
    [primaryColor.component2]: blue.component2,
    [primaryColor.component3]: blue.component3,
    [primaryColor.border1]: blue.border1,
    [primaryColor.border2]: blue.border2,
    [primaryColor.border3]: blue.border3,
    [primaryColor.solid1]: blue.solid1,
    [primaryColor.solid2]: blue.solid2,
    [primaryColor.text1]: blue.text1,
    [primaryColor.text2]: blue.text2,
  },
  themePurple: {
    [primaryColor.bg]: purple.bg,
    [primaryColor.bgSubtle]: purple.bgSubtle,
    [primaryColor.component1]: purple.component1,
    [primaryColor.component2]: purple.component2,
    [primaryColor.component3]: purple.component3,
    [primaryColor.border1]: purple.border1,
    [primaryColor.border2]: purple.border2,
    [primaryColor.border3]: purple.border3,
    [primaryColor.solid1]: purple.solid1,
    [primaryColor.solid2]: purple.solid2,
    [primaryColor.text1]: purple.text1,
    [primaryColor.text2]: purple.text2,
  },
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
      import.meta.env.DEV
        ? {
            rel: "stylesheet",
            href: "/virtual:stylex.css",
          }
        : null,
    ].filter((i): i is NonNullable<typeof i> => i !== null),
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body {...stylex.props(ui.bg, ui.text, styles.body, styles.themeBlue)}>
        <script>{`
          const localtColorScheme = localStorage.getItem("hip-ui-color-scheme");

          if (localtColorScheme) {
            document.body.style.colorScheme = localtColorScheme;
          }
        `}</script>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
