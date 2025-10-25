import { Slider } from "../../components/slider";

export function Basic() {
  return (
    <Slider
      label="Volume"
      defaultValue={50}
      minValue={0}
      maxValue={100}
      step={1}
    />
  );
}
