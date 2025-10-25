import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";

export function Basic() {
  return (
    <ToggleButtonGroup variant="grouped">
      <ToggleButton>Option 1</ToggleButton>
      <ToggleButton>Option 2</ToggleButton>
      <ToggleButton>Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
}
