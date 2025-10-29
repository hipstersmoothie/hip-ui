import * as stylex from "@stylexjs/stylex";

import { ColorArea } from "@/components/color-area";

const styles = stylex.create({
  wrapper: {
    width: 240,
  },
});

export function Basic() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorArea
        xChannel="saturation"
        yChannel="lightness"
        defaultValue="hsl(200, 50%, 50%)"
      />
    </div>
  );
}
