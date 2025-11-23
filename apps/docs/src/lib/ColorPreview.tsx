import { allColors, Color } from "./ThemeContext";
import { spacing } from "../components/theme/spacing.stylex";
import { radius } from "../components/theme/radius.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  dot: {
    width: spacing["4"],
    height: spacing["4"],
    borderRadius: radius["full"],
    alignItems: "center",
  },
  preview: (color: Color) => ({
    backgroundColor: allColors[color].solid1,
  }),
});

export const ColorPreview = ({ color }: { color: Color }) => {
  return <div {...stylex.props(styles.dot, styles.preview(color))} />;
};
