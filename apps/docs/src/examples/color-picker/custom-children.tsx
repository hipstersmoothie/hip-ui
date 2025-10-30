import { ColorArea } from "@/components/color-area";
import { ColorPicker } from "@/components/color-picker";
import { ColorSlider } from "@/components/color-slider";

export function CustomChildren() {
  return (
    <ColorPicker defaultValue="#5100FF">
      <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
      <div>
        <ColorSlider channel="hue" label="Hue" />
        <ColorSlider channel="alpha" label="Alpha" />
      </div>
    </ColorPicker>
  );
}
