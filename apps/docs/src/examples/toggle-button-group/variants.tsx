import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { ToggleButton } from "@/components/toggle-button";
import { Flex } from "@/components/flex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    width: 500,
  },
});

export function Variants() {
  return (
    <Flex gap="4" justify="start" direction="column" style={styles.container}>
      <ToggleButtonGroup variant="grouped">
        <ToggleButton>Option 1</ToggleButton>
        <ToggleButton>Option 2</ToggleButton>
        <ToggleButton>Option 3</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup variant="separate" itemsPerRow={3}>
        <ToggleButton>Option 1</ToggleButton>
        <ToggleButton>Option 2</ToggleButton>
        <ToggleButton>Option 3</ToggleButton>
      </ToggleButtonGroup>
    </Flex>
  );
}
