import { isMac as getIsMac } from "@react-aria/utils";
import * as stylex from "@stylexjs/stylex";

import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, tracking } from "../theme/typography.stylex";

const styles = stylex.create({
  kbd: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    backgroundColor: uiColor.component2,
    color: uiColor.text1,
    fontFamily: fontFamily["sans"],
    fontSize: fontSize.sm,
    letterSpacing: tracking["widest"],
    paddingBottom: spacing["0.5"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
    paddingTop: spacing["0.5"],
  },
});

export interface KbdProps
  extends StyleXComponentProps<Omit<React.ComponentProps<"kbd">, "children">> {
  children: string;
}

export function Kbd({ children, style, ...props }: KbdProps) {
  const isMac = getIsMac();
  let finalString = "";

  for (const char of children.split("+")) {
    switch (char) {
      case "MetaOrCtrl": {
        finalString += isMac ? "⌘" : "Ctrl";
        break;
      }
      case "Shift": {
        finalString += "⇧";
        break;
      }
      case "Plus": {
        finalString += "+";
        break;
      }
      case "Enter": {
        finalString += "↵";
        break;
      }
      case "Tab": {
        finalString += "⇥";
        break;
      }
      case "Backspace": {
        finalString += "⌫";
        break;
      }
      case "Delete": {
        finalString += "⌦";
        break;
      }
      case "ArrowLeft": {
        finalString += "←";
        break;
      }
      case "ArrowRight": {
        finalString += "→";
        break;
      }
      case "ArrowUp": {
        finalString += "↑";
        break;
      }
      case "ArrowDown": {
        finalString += "↓";
        break;
      }
      default: {
        finalString += char;
      }
    }
  }

  return (
    <kbd
      {...stylex.props(styles.kbd, style)}
      {...props}
      // The keyboard shortcut will change
      suppressHydrationWarning
    >
      {finalString}
    </kbd>
  );
}
