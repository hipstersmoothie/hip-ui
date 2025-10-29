import * as stylex from "@stylexjs/stylex";

import { ColorWheel } from "../../components/color-wheel";

const styles = stylex.create({
  wrapper: {
    width: 220,
  },
});

export function Disabled() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorWheel isDisabled defaultValue="hsl(0, 100%, 50%)" width={100} />
    </div>
  );
}
