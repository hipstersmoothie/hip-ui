"use client";

import type { FormProps as AriaFormProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Form as AriaForm } from "react-aria-components";

import type { StyleXComponentProps } from "../theme/types";

import { spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  form: {
    gap: spacing["4"],
    display: "flex",
    flexDirection: "column",
  },
});

export interface FormProps extends StyleXComponentProps<AriaFormProps> {}

export function Form({ style, ...props }: FormProps) {
  return <AriaForm {...props} {...stylex.props(styles.form, style)} />;
}
