import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/components/color-swatch-picker";

const COLORS = [
  "#A00",
  "#f80",
  "#080",
  "#08f",
  "#088",
  "#008",
  "#f0f",
  "#0ff",
] as const;

export function Layout() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <ColorSwatchPicker aria-label="Stack layout" layout="stack">
        {COLORS.map((c) => (
          <ColorSwatchPickerItem key={c} color={c} />
        ))}
      </ColorSwatchPicker>
    </div>
  );
}
