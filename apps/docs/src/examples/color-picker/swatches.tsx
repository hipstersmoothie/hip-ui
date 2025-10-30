import { ColorPicker, DefaultColorEditor } from "@/components/color-picker";

const SWATCHES = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
  "#5100FF",
  "#A00",
  "#f80",
  "#080",
  "#08f",
  "#088",
  "#008",
  "#f0f",
  "#0ff",
  "#dead",
  "#000000",
  "#808080",
  "#FFFFFF",
];

export function Swatches() {
  return (
    <ColorPicker defaultValue="#5100FF" label="Fill color">
      <DefaultColorEditor swatches={SWATCHES} />
    </ColorPicker>
  );
}
