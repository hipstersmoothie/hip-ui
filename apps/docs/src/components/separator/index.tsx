import * as stylex from "@stylexjs/stylex";
import {
  SeparatorProps as AriaSeparatorProps,
  Separator as AriaSeparator,
} from "react-aria-components";

import { uiColor } from "../theme/semantic-color.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  separator: {
    backgroundColor: uiColor.border2,
    borderWidth: 0,
    height: {
      default: "1px",
      ":is([aria-orientation=vertical])": "100%",
    },
    margin: 0,
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
