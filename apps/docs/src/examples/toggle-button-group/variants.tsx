import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";

const styles = stylex.create({
  container: {
    width: 500,
  },
});

export function Variants() {
  return (
    <Flex gap="4" justify="start" direction="column" style={styles.container}>
      <ToggleButtonGroup variant="grouped">
        <ToggleButton variant="secondary">Option 1</ToggleButton>
        <ToggleButton variant="secondary">Option 2</ToggleButton>
        <ToggleButton variant="secondary">Option 3</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup variant="separate" itemsPerRow={3}>
        <ToggleButton variant="tertiary">Option 1</ToggleButton>
        <ToggleButton variant="tertiary">Option 2</ToggleButton>
        <ToggleButton variant="tertiary">Option 3</ToggleButton>
      </ToggleButtonGroup>
    </Flex>
  );
}
