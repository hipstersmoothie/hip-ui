import type { SeparatorProps as AriaSeparatorProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Separator as AriaSeparator } from "react-aria-components";

import { slate } from "../theme/colors.stylex";

const styles = stylex.create({
  separator: {
    margin: 0,
    borderWidth: 0,
    backgroundColor: slate.border2,
    height: {
      default: "1px",
      ":is([aria-orientation=vertical])": "100%",
    },
    width: {
      default: "100%",
      ":is([aria-orientation=vertical])": "1px",
    },
  },
});

export interface SeparatorProps extends Omit<
  AriaSeparatorProps,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function Separator({ style, ...props }: SeparatorProps) {
  return (
    <AriaSeparator {...props} {...stylex.props(styles.separator, style)} />
  );
}
