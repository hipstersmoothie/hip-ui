"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  DisclosureGroup as AriaDisclosureGroup,
  DisclosureGroupProps as AriaDisclosureGroupProps,
} from "react-aria-components";

import { SizeContext } from "../context";
import { uiColor } from "../theme/color.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  group: {
    display: "flex",
    flexDirection: "column",
  },
  separator: {
    margin: 0,
    borderWidth: 0,
    backgroundColor: uiColor.border2,
    height: "1px",
    width: "100%",
  },
});

export interface DisclosureGroupProps
  extends StyleXComponentProps<AriaDisclosureGroupProps> {
  size?: Size;
}

export function DisclosureGroup({
  style,
  size: sizeProp,
  ...props
}: DisclosureGroupProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaDisclosureGroup
        {...props}
        data-size={size}
        {...stylex.props(styles.group, style)}
      />
    </SizeContext>
  );
}

export interface SeparatorProps
  extends StyleXComponentProps<React.HTMLAttributes<HTMLDivElement>> {}

export function DisclosureGroupSeparator({ style, ...props }: SeparatorProps) {
  return <div {...props} {...stylex.props(styles.separator, style)} />;
}
