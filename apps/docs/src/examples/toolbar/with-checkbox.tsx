import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { ToggleButton } from "@/components/toggle-button";
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "@/components/toolbar";

export function WithCheckbox() {
  return (
    <Toolbar aria-label="Text formatting">
      <ToolbarGroup aria-label="Style">
        <ToggleButton aria-label="Bold" variant="secondary">
          <b>B</b>
        </ToggleButton>
        <ToggleButton aria-label="Italic" variant="secondary">
          <i>I</i>
        </ToggleButton>
        <ToggleButton aria-label="Underline" variant="secondary">
          <u>U</u>
        </ToggleButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Clipboard">
        <Button variant="secondary">Copy</Button>
        <Button variant="secondary">Paste</Button>
        <Button variant="secondary">Cut</Button>
      </ToolbarGroup>
      <ToolbarSeparator />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  );
}
