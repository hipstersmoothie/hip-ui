import { ColorSwatchPicker, ColorSwatchPickerItem } from "@/components/color-swatch-picker";

const COLORS = ["#A00", "#f80", "#080", "#08f", "#088", "#008"] as const;

export function Size() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <ColorSwatchPicker aria-label="Small colors" size="sm">
        {COLORS.map((c) => (
          <ColorSwatchPickerItem key={c} color={c} />
        ))}
      </ColorSwatchPicker>

      <ColorSwatchPicker aria-label="Medium colors" size="md">
        {COLORS.map((c) => (
          <ColorSwatchPickerItem key={c} color={c} />
        ))}
      </ColorSwatchPicker>

      <ColorSwatchPicker aria-label="Large colors" size="lg">
        {COLORS.map((c) => (
          <ColorSwatchPickerItem key={c} color={c} />
        ))}
      </ColorSwatchPicker>
    </div>
  );
}


