import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Separator } from "@/components/separator";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  separator: {
    height: spacing["4"],
  },
});

export function SeparatorOrientation() {
  return (
    <Flex gap="4" align="center">
      <div>Left</div>
      <Separator orientation="vertical" style={styles.separator} />
      <div>Center</div>
      <Separator orientation="vertical" style={styles.separator} />
      <div>Right</div>
    </Flex>
  );
}
