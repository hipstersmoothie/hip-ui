import * as stylex from "@stylexjs/stylex";

export type ThemeKeys<T> =
  T extends stylex.VarGroup<Readonly<infer Tokens>> ? keyof Tokens : never;

export type Size = "sm" | "md" | "lg";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "critical"
  | "critical-outline";
export type InputVariant = "primary" | "secondary" | "tertiary";
export type ButtonGroupVariant = "grouped" | "separate";
