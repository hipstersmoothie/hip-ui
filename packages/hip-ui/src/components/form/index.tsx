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
    display: "flex",
    flexDirection: "column",
    gap: spacing["4"],
  },
});

export interface FormProps extends StyleXComponentProps<AriaFormProps> {}

export function Form({ style, ...props }: FormProps) {
  return <AriaForm {...props} {...stylex.props(styles.form, style)} />;
}
