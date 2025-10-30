import { ColorPicker, DefaultColorEditor } from "@/components/color-picker";

export function DefaultEditor() {
  return (
    <ColorPicker defaultValue="#5100FF" label="Fill color" placement="right">
      <DefaultColorEditor />
    </ColorPicker>
  );
}
