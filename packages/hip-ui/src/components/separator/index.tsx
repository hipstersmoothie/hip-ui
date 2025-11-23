import * as stylex from "@stylexjs/stylex";
import {
  SeparatorProps as AriaSeparatorProps,
  Separator as AriaSeparator,
} from "react-aria-components";

import { uiColor } from "../theme/color.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  separator: {
    margin: 0,
    borderWidth: 0,
    backgroundColor: uiColor.border2,
    height: {
      default: "1px",
      ":is([aria-orientation=vertical])": "100%",
    },
    width: {
      default: "100%",
      ":is([aria-orientation=vertical])": "1px",
    },
  },
});

export interface SeparatorProps
  extends StyleXComponentProps<AriaSeparatorProps> {}

export function Separator({ style, ...props }: SeparatorProps) {
  return (
    <AriaSeparator {...props} {...stylex.props(styles.separator, style)} />
  );
}
