import * as stylex from "@stylexjs/stylex";

import { Spacing, spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  base: { display: "grid" },

  rows: (template: string) => ({ gridTemplateRows: template }),
  columns: (template: string) => ({ gridTemplateColumns: template }),

  "justify-content-start": { justifyContent: "flex-start" },
  "justify-content-end": { justifyContent: "flex-end" },
  "justify-content-center": { justifyContent: "center" },
  "justify-content-between": { justifyContent: "space-between" },
  "justify-content-around": { justifyContent: "space-around" },
  "justify-content-evenly": { justifyContent: "space-evenly" },

  "align-items-stretch": { alignItems: "stretch" },
  "align-items-start": { alignItems: "flex-start" },
  "align-items-end": { alignItems: "flex-end" },
  "align-items-center": { alignItems: "center" },
  "align-items-baseline": { alignItems: "baseline" },

  "align-content-start": { alignContent: "start" },
  "align-content-end": { alignContent: "end" },
  "align-content-center": { alignContent: "center" },
  "align-content-between": { alignContent: "space-between" },
  "align-content-around": { alignContent: "space-around" },
  "align-content-evenly": { alignContent: "space-evenly" },

  "justify-items-start": { justifyItems: "start" },
  "justify-items-end": { justifyItems: "end" },
  "justify-items-center": { justifyItems: "center" },

  "row-gap-0.5": { gap: spacing["0.5"] },
  "row-gap-1": { gap: spacing["1"] },
  "row-gap-1.5": { gap: spacing["1.5"] },
  "row-gap-2": { gap: spacing["2"] },
  "row-gap-2.5": { gap: spacing["2.5"] },
  "row-gap-3": { gap: spacing["3"] },
  "row-gap-3.5": { gap: spacing["3.5"] },
  "row-gap-4": { gap: spacing["4"] },
  "row-gap-5": { gap: spacing["5"] },
  "row-gap-6": { gap: spacing["6"] },
  "row-gap-7": { gap: spacing["7"] },
  "row-gap-8": { gap: spacing["8"] },
  "row-gap-9": { gap: spacing["9"] },
  "row-gap-10": { gap: spacing["10"] },
  "row-gap-11": { gap: spacing["11"] },
  "row-gap-12": { gap: spacing["12"] },
  "row-gap-14": { gap: spacing["14"] },
  "row-gap-16": { gap: spacing["16"] },
  "row-gap-20": { gap: spacing["20"] },
  "row-gap-24": { gap: spacing["24"] },
  "row-gap-28": { gap: spacing["28"] },
  "row-gap-32": { gap: spacing["32"] },
  "row-gap-36": { gap: spacing["36"] },
  "row-gap-40": { gap: spacing["40"] },
  "row-gap-44": { gap: spacing["44"] },
  "row-gap-48": { gap: spacing["48"] },
  "row-gap-52": { gap: spacing["52"] },
  "row-gap-56": { gap: spacing["56"] },
  "row-gap-60": { gap: spacing["60"] },
  "row-gap-64": { gap: spacing["64"] },
  "row-gap-72": { gap: spacing["72"] },
  "row-gap-80": { gap: spacing["80"] },
  "row-gap-96": { gap: spacing["96"] },

  "column-gap-0.5": { gap: spacing["0.5"] },
  "column-gap-1": { gap: spacing["1"] },
  "column-gap-1.5": { gap: spacing["1.5"] },
  "column-gap-2": { gap: spacing["2"] },
  "column-gap-2.5": { gap: spacing["2.5"] },
  "column-gap-3": { gap: spacing["3"] },
  "column-gap-3.5": { gap: spacing["3.5"] },
  "column-gap-4": { gap: spacing["4"] },
  "column-gap-5": { gap: spacing["5"] },
  "column-gap-6": { gap: spacing["6"] },
  "column-gap-7": { gap: spacing["7"] },
  "column-gap-8": { gap: spacing["8"] },
  "column-gap-9": { gap: spacing["9"] },
  "column-gap-10": { gap: spacing["10"] },
  "column-gap-11": { gap: spacing["11"] },
  "column-gap-12": { gap: spacing["12"] },
  "column-gap-14": { gap: spacing["14"] },
  "column-gap-16": { gap: spacing["16"] },
  "column-gap-20": { gap: spacing["20"] },
  "column-gap-24": { gap: spacing["24"] },
  "column-gap-28": { gap: spacing["28"] },
  "column-gap-32": { gap: spacing["32"] },
  "column-gap-36": { gap: spacing["36"] },
  "column-gap-40": { gap: spacing["40"] },
  "column-gap-44": { gap: spacing["44"] },
  "column-gap-48": { gap: spacing["48"] },
  "column-gap-52": { gap: spacing["52"] },
  "column-gap-56": { gap: spacing["56"] },
  "column-gap-60": { gap: spacing["60"] },
  "column-gap-64": { gap: spacing["64"] },
  "column-gap-72": { gap: spacing["72"] },
  "column-gap-80": { gap: spacing["80"] },
  "column-gap-96": { gap: spacing["96"] },

  columnStart: (start: number) => ({ gridColumnStart: start }),
  columnEnd: (end: number) => ({ gridColumnEnd: end }),
  rowStart: (start: number) => ({ gridRowStart: start }),
  rowEnd: (end: number) => ({ gridRowEnd: end }),
});

export interface GridProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  /**
   * The grid template rows of the grid container.
   * @default "auto"
   * @type string
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  rows?: string;
  /**
   * The grid template columns of the grid container.
   * @default "auto"
   * @type string
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  columns?: string;
  /**
   * The flex justify content of the flex container.
   * @default "start"
   * @type "start" | "end" | "center" | "between" | "around" | "evenly"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  /**
   * The flex align items of the flex container.
   * @default "stretch"
   * @type "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?: "stretch" | "start" | "end" | "center" | "baseline";
  /**
   * The grid justify items of the grid container.
   * @default "stretch"
   * @type "start" | "end" | "center" | "between" | "around" | "evenly"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
   */
  justifyItems?: "start" | "end" | "center";
  /**
   * The grid align content of the grid container.
   * @default "stretch"
   * @type "start" | "end" | "center" | "between" | "around" | "evenly"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  /**
   * The gap of the flex container.
   * @default "0"
   * @type "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  columnGap?: Spacing;
  /**
   * The row gap of the grid container.
   * @default "0"
   * @type "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  rowGap?: Spacing;
}

export const Grid = ({
  style,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems,
  columnGap,
  rowGap,
  rows,
  columns,
  ...props
}: GridProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.base,
        typeof rows === "string" && styles.rows(rows),
        typeof columns === "string" && styles.columns(columns),

        justifyContent === "start" && styles["justify-content-start"],
        justifyContent === "end" && styles["justify-content-end"],
        justifyContent === "center" && styles["justify-content-center"],
        justifyContent === "between" && styles["justify-content-between"],
        justifyContent === "around" && styles["justify-content-around"],
        justifyContent === "evenly" && styles["justify-content-evenly"],

        alignItems === "stretch" && styles["align-items-stretch"],
        alignItems === "start" && styles["align-items-start"],
        alignItems === "end" && styles["align-items-end"],
        alignItems === "center" && styles["align-items-center"],
        alignItems === "baseline" && styles["align-items-baseline"],

        alignContent === "start" && styles["align-content-start"],
        alignContent === "end" && styles["align-content-end"],
        alignContent === "center" && styles["align-content-center"],
        alignContent === "between" && styles["align-content-between"],
        alignContent === "around" && styles["align-content-around"],
        alignContent === "evenly" && styles["align-content-evenly"],

        justifyItems === "start" && styles["justify-items-start"],
        justifyItems === "end" && styles["justify-items-end"],
        justifyItems === "center" && styles["justify-items-center"],

        typeof columnGap === "string" &&
          (styles[
            `column-gap-${columnGap}` as keyof typeof styles
          ] as stylex.StyleXStyles),
        typeof rowGap === "string" &&
          (styles[
            `row-gap-${rowGap}` as keyof typeof styles
          ] as stylex.StyleXStyles),

        style,
      )}
    />
  );
};

interface GridItemProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  columnStart?: number;
  columnEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}

export const GridItem = ({
  style,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  ...props
}: GridItemProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        columnStart != null && styles.columnStart(columnStart),
        columnEnd != null && styles.columnEnd(columnEnd),
        rowStart != null && styles.rowStart(rowStart),
        rowEnd != null && styles.rowEnd(rowEnd),
        style,
      )}
    />
  );
};
