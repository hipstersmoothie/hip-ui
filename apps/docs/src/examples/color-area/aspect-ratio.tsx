import * as stylex from "@stylexjs/stylex";

import { ColorArea } from "@/components/color-area";

const styles = stylex.create({
  wrapper: {
    width: 300,
  },
});

export function AspectRatio() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorArea
        xChannel="saturation"
        yChannel="lightness"
        aspectRatio={16 / 9}
        defaultValue="hsl(300, 60%, 40%)"
      />
    </div>
  );
}
