import { ColorPicker, DefaultColorEditor } from "@/components/color-picker";

export function AlphaChannel() {
  return (
    <ColorPicker defaultValue="#5100FF" label="Fill color">
      <DefaultColorEditor hasAlpha={false} />
    </ColorPicker>
  );
}
