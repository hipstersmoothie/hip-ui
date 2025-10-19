import * as stylex from "@stylexjs/stylex";

export type ThemeKeys<T> =
  T extends stylex.VarGroup<Readonly<infer Tokens>> ? keyof Tokens : never;
