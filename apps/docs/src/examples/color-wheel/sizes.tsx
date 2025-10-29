import * as stylex from "@stylexjs/stylex";

import { ColorWheel } from "../../components/color-wheel";
import { Flex } from "../../components/flex";

const styles = stylex.create({
  wrapper: {
    width: 360,
  },
});

export function Sizes() {
  return (
    <Flex gap="6" align="center" justify="center" style={styles.wrapper}>
      <ColorWheel size="sm" defaultValue="hsl(120, 100%, 50%)" width={100} />
      <ColorWheel size="md" defaultValue="hsl(200, 100%, 50%)" width={100} />
      <ColorWheel size="lg" defaultValue="hsl(280, 100%, 50%)" width={100} />
    </Flex>
  );
}
