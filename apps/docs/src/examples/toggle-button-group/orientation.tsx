import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { ToggleButton } from "@/components/toggle-button";

export function Orientation() {
  return (
    <ToggleButtonGroup variant="grouped" orientation="vertical">
      <ToggleButton>Option 1</ToggleButton>
      <ToggleButton>Option 2</ToggleButton>
      <ToggleButton>Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
}
