import * as stylex from "@stylexjs/stylex";
import { Spacing, spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  base: { display: "flex" },
  inline: { display: "inline-flex" },
  row: { flexDirection: "row" },
  "row-reverse": { flexDirection: "row-reverse" },
  column: { flexDirection: "column" },
  "column-reverse": { flexDirection: "column-reverse" },
  wrap: { flexWrap: "wrap" },
  "wrap-reverse": { flexWrap: "wrap-reverse" },
  "justify-start": { justifyContent: "flex-start" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-around": { justifyContent: "space-around" },
  "justify-evenly": { justifyContent: "space-evenly" },
  "align-stretch": { alignItems: "stretch" },
  "align-start": { alignItems: "flex-start" },
  "align-end": { alignItems: "flex-end" },
  "align-center": { alignItems: "center" },
  "align-baseline": { alignItems: "baseline" },
  "gap-0.5": { gap: spacing["0.5"] },
  "gap-1": { gap: spacing["1"] },
  "gap-1.5": { gap: spacing["1.5"] },
  "gap-2": { gap: spacing["2"] },
  "gap-2.5": { gap: spacing["2.5"] },
  "gap-3": { gap: spacing["3"] },
  "gap-3.5": { gap: spacing["3.5"] },
  "gap-4": { gap: spacing["4"] },
  "gap-5": { gap: spacing["5"] },
  "gap-6": { gap: spacing["6"] },
  "gap-7": { gap: spacing["7"] },
  "gap-8": { gap: spacing["8"] },
  "gap-9": { gap: spacing["9"] },
  "gap-10": { gap: spacing["10"] },
  "gap-11": { gap: spacing["11"] },
  "gap-12": { gap: spacing["12"] },
  "gap-14": { gap: spacing["14"] },
  "gap-16": { gap: spacing["16"] },
  "gap-20": { gap: spacing["20"] },
  "gap-24": { gap: spacing["24"] },
  "gap-28": { gap: spacing["28"] },
  "gap-32": { gap: spacing["32"] },
  "gap-36": { gap: spacing["36"] },
  "gap-40": { gap: spacing["40"] },
  "gap-44": { gap: spacing["44"] },
  "gap-48": { gap: spacing["48"] },
  "gap-52": { gap: spacing["52"] },
  "gap-56": { gap: spacing["56"] },
  "gap-60": { gap: spacing["60"] },
  "gap-64": { gap: spacing["64"] },
  "gap-72": { gap: spacing["72"] },
  "gap-80": { gap: spacing["80"] },
  "gap-96": { gap: spacing["96"] },
});

export interface FlexProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  /**
   * The direction of the flex container.
   * @default "row"
   * @type "row" | "row-reverse" | "column" | "column-reverse"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /**
   * The flex wrap of the flex container.
   * @default false
   * @type "nowrap" | "wrap" | "wrap-reverse"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  wrap?: boolean | "reverse";
  /**
   * The flex justify content of the flex container.
   * @default "start"
   * @type "start" | "end" | "center" | "between" | "around" | "evenly"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  /**
   * The flex align items of the flex container.
   * @default "stretch"
   * @type "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  align?: "stretch" | "start" | "end" | "center" | "baseline";
  /**
   * The gap of the flex container.
   * @default "0"
   * @type "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: Spacing;
  /**
   * Whether the flex container is inline.
   * @default false
   * @type boolean
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  inline?: boolean;
}

export const Flex = ({
  style,
  direction,
  wrap,
  justify,
  align,
  gap,
  inline,
  ...props
}: FlexProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        inline ? styles.inline : styles.base,
        direction === "row" && styles.row,
        direction === "row-reverse" && styles["row-reverse"],
        direction === "column" && styles.column,
        direction === "column-reverse" && styles["column-reverse"],

        wrap && styles.wrap,
        wrap === "reverse" && styles["wrap-reverse"],

        justify === "start" && styles["justify-start"],
        justify === "end" && styles["justify-end"],
        justify === "center" && styles["justify-center"],
        justify === "between" && styles["justify-between"],
        justify === "around" && styles["justify-around"],
        justify === "evenly" && styles["justify-evenly"],

        align === "stretch" && styles["align-stretch"],
        align === "start" && styles["align-start"],
        align === "end" && styles["align-end"],
        align === "center" && styles["align-center"],
        align === "baseline" && styles["align-baseline"],

        typeof gap === "string" && styles[`gap-${gap}` as keyof typeof styles],

        style,
      )}
    />
  );
};
