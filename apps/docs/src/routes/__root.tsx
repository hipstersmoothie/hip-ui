import "@/styles/styles.css";

import * as stylex from "@stylexjs/stylex";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { ui } from "../components/theme/semantic-color.stylex";
import {
  criticalColor,
  primaryColor,
  successColor,
  uiColor,
  uiInverted,
  warningColor,
} from "../components/theme/color.stylex";

import {
  allColors,
  Color,
  defaultTheme,
  Theme,
  ThemeContext,
  UiColor,
  uiColorsInverted,
} from "@/lib/ThemeContext";
import { useState } from "react";

if (import.meta.env.DEV) {
  import("virtual:stylex:runtime");
}

const styles = stylex.create({
  body: {
    margin: 0,
  },
  theme: (
    primaryColorOverride: Color,
    uiColorOverride: UiColor,
    successColorOverride: Color,
    warningColorOverride: Color,
    criticalColorOverride: Color,
  ) => ({
    [primaryColor.bg]: allColors[primaryColorOverride].bg,
    [primaryColor.bgSubtle]: allColors[primaryColorOverride].bgSubtle,
    [primaryColor.component1]: allColors[primaryColorOverride].component1,
    [primaryColor.component2]: allColors[primaryColorOverride].component2,
    [primaryColor.component3]: allColors[primaryColorOverride].component3,
    [primaryColor.border1]: allColors[primaryColorOverride].border1,
    [primaryColor.border2]: allColors[primaryColorOverride].border2,
    [primaryColor.border3]: allColors[primaryColorOverride].border3,
    [primaryColor.solid1]: allColors[primaryColorOverride].solid1,
    [primaryColor.solid2]: allColors[primaryColorOverride].solid2,
    [primaryColor.text1]: allColors[primaryColorOverride].text1,
    [primaryColor.text2]: allColors[primaryColorOverride].text2,

    [uiColor.bg]: allColors[uiColorOverride].bg,
    [uiColor.bgSubtle]: allColors[uiColorOverride].bgSubtle,
    [uiColor.component1]: allColors[uiColorOverride].component1,
    [uiColor.component2]: allColors[uiColorOverride].component2,
    [uiColor.component3]: allColors[uiColorOverride].component3,
    [uiColor.border1]: allColors[uiColorOverride].border1,
    [uiColor.border2]: allColors[uiColorOverride].border2,
    [uiColor.border3]: allColors[uiColorOverride].border3,
    [uiColor.solid1]: allColors[uiColorOverride].solid1,
    [uiColor.solid2]: allColors[uiColorOverride].solid2,
    [uiColor.text1]: allColors[uiColorOverride].text1,
    [uiColor.text2]: allColors[uiColorOverride].text2,

    [uiInverted.bg]: uiColorsInverted[uiColorOverride].bg,
    [uiInverted.bgSubtle]: uiColorsInverted[uiColorOverride].bgSubtle,
    [uiInverted.component1]: uiColorsInverted[uiColorOverride].component1,
    [uiInverted.component2]: uiColorsInverted[uiColorOverride].component2,
    [uiInverted.component3]: uiColorsInverted[uiColorOverride].component3,
    [uiInverted.border1]: uiColorsInverted[uiColorOverride].border1,
    [uiInverted.border2]: uiColorsInverted[uiColorOverride].border2,
    [uiInverted.border3]: uiColorsInverted[uiColorOverride].border3,
    [uiInverted.solid1]: uiColorsInverted[uiColorOverride].solid1,
    [uiInverted.solid2]: uiColorsInverted[uiColorOverride].solid2,
    [uiInverted.text1]: uiColorsInverted[uiColorOverride].text1,
    [uiInverted.text2]: uiColorsInverted[uiColorOverride].text2,

    [successColor.bg]: allColors[successColorOverride].bg,
    [successColor.bgSubtle]: allColors[successColorOverride].bgSubtle,
    [successColor.component1]: allColors[successColorOverride].component1,
    [successColor.component2]: allColors[successColorOverride].component2,
    [successColor.component3]: allColors[successColorOverride].component3,
    [successColor.border1]: allColors[successColorOverride].border1,
    [successColor.border2]: allColors[successColorOverride].border2,
    [successColor.border3]: allColors[successColorOverride].border3,
    [successColor.solid1]: allColors[successColorOverride].solid1,
    [successColor.solid2]: allColors[successColorOverride].solid2,
    [successColor.text1]: allColors[successColorOverride].text1,
    [successColor.text2]: allColors[successColorOverride].text2,

    [warningColor.bg]: allColors[warningColorOverride].bg,
    [warningColor.bgSubtle]: allColors[warningColorOverride].bgSubtle,
    [warningColor.component1]: allColors[warningColorOverride].component1,
    [warningColor.component2]: allColors[warningColorOverride].component2,
    [warningColor.component3]: allColors[warningColorOverride].component3,
    [warningColor.border1]: allColors[warningColorOverride].border1,
    [warningColor.border2]: allColors[warningColorOverride].border2,
    [warningColor.border3]: allColors[warningColorOverride].border3,
    [warningColor.solid1]: allColors[warningColorOverride].solid1,
    [warningColor.solid2]: allColors[warningColorOverride].solid2,
    [warningColor.text1]: allColors[warningColorOverride].text1,
    [warningColor.text2]: allColors[warningColorOverride].text2,

    [criticalColor.bg]: allColors[criticalColorOverride].bg,
    [criticalColor.bgSubtle]: allColors[criticalColorOverride].bgSubtle,
    [criticalColor.component1]: allColors[criticalColorOverride].component1,
    [criticalColor.component2]: allColors[criticalColorOverride].component2,
    [criticalColor.component3]: allColors[criticalColorOverride].component3,
    [criticalColor.border1]: allColors[criticalColorOverride].border1,
    [criticalColor.border2]: allColors[criticalColorOverride].border2,
    [criticalColor.border3]: allColors[criticalColorOverride].border3,
    [criticalColor.solid1]: allColors[criticalColorOverride].solid1,
    [criticalColor.solid2]: allColors[criticalColorOverride].solid2,
    [criticalColor.text1]: allColors[criticalColorOverride].text1,
    [criticalColor.text2]: allColors[criticalColorOverride].text2,
  }),
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
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body
          {...stylex.props(
            ui.bg,
            ui.text,
            styles.body,
            styles.theme(
              theme.primaryColor,
              theme.uiColor,
              theme.successColor,
              theme.warningColor,
              theme.criticalColor,
            ),
          )}
        >
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
    </ThemeContext>
  );
}
