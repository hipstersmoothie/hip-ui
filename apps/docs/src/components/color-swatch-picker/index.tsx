import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  ColorSwatchPicker as AriaColorSwatchPicker,
  ColorSwatchPickerItem as AriaColorSwatchPickerItem,
  type ColorSwatchPickerItemProps as AriaColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as AriaColorSwatchPickerProps,
} from "react-aria-components";

import { ColorSwatch } from "../color-swatch";
import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  picker: {
    display: "flex",
    flexDirection: {
      default: "row",
      ":is([data-layout=stack])": "column",
    },
    flexWrap: "wrap",
    gap: {
      default: spacing["2"],
      ":is([data-size=sm])": spacing["1"],
    },
  },
  item: {
    borderRadius: {
      ":is([data-size=sm] *)": radius.sm,
      ":is([data-size=md] *)": radius.md,
      ":is([data-size=lg] *)": radius.lg,
    },
    boxSizing: "border-box",
    forcedColorAdjust: "none",
    outline: "none",
    position: "relative",
    width: "fit-content",

    borderColor: { ":is([data-selected])::after": uiColor.border3 },
    borderStyle: { ":is([data-selected])::after": "solid" },
    borderWidth: { ":is([data-selected])::after": 1 },
    outlineColor: { ":is([data-selected])::after": "white" },
    outlineOffset: { ":is([data-selected])::after": "-2px" },
    outlineStyle: { ":is([data-selected])::after": "solid" },
    outlineWidth: { ":is([data-selected])::after": "2px" },
    "::after": {
      borderRadius: "inherit",
      boxSizing: "border-box",
      content: "",
      inset: 0,
      position: "absolute",
    },
  },
});

export interface ColorSwatchPickerProps
  extends StyleXComponentProps<Omit<AriaColorSwatchPickerProps, "children">> {
  children?: React.ReactNode;
  layout?: "grid" | "stack";
  size?: Size;
}

export function ColorSwatchPicker({
  style,
  size: sizeProp,
  children,
  layout = "grid",
  ...props
}: ColorSwatchPickerProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaColorSwatchPicker
        layout={layout}
        data-size={size}
        {...props}
        {...stylex.props(styles.picker, style)}
      >
        {children}
      </AriaColorSwatchPicker>
    </SizeContext>
  );
}

export interface ColorSwatchPickerItemProps
  extends StyleXComponentProps<
    Omit<AriaColorSwatchPickerItemProps, "children">
  > {}

export function ColorSwatchPickerItem({
  style,
  ...props
}: ColorSwatchPickerItemProps) {
  return (
    <AriaColorSwatchPickerItem {...props} {...stylex.props(styles.item, style)}>
      <ColorSwatch />
    </AriaColorSwatchPickerItem>
  );
}

export { ColorSwatch } from "../color-swatch";
