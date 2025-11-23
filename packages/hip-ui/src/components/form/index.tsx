"use client";

import * as stylex from "@stylexjs/stylex";
import {
  Form as AriaForm,
  FormProps as AriaFormProps,
} from "react-aria-components";

import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

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
