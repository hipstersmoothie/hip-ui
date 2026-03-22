import * as stylex from "@stylexjs/stylex";

import type { Color } from "./ThemeContext";

import { radius } from "../components/theme/radius.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { allColors } from "./ThemeContext";

const styles = stylex.create({
  dot: {
    borderRadius: radius.full,
    alignItems: "center",
    height: spacing["4"],
    width: spacing["4"],
  },
  preview: (color: Color) => ({
    // oxlint-disable-next-line @stylexjs/valid-styles
    backgroundColor: allColors[color].solid1,
  }),
});

export const ColorPreview = ({ color }: { color: Color }) => {
  return <div {...stylex.props(styles.dot, styles.preview(color))} />;
};
