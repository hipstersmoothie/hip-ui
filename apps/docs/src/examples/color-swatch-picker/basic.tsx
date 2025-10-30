import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/components/color-swatch-picker";

const COLORS = ["#A00", "#f80", "#080", "#08f", "#088", "#008"] as const;

export function Basic() {
  return (
    <ColorSwatchPicker aria-label="Color choices">
      {COLORS.map((c) => (
        <ColorSwatchPickerItem key={c} color={c} />
      ))}
    </ColorSwatchPicker>
  );
}
