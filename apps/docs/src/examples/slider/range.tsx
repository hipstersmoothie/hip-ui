import { Slider } from "../../components/slider";

export function Range() {
  return (
    <Slider
      label="Price Range"
      defaultValue={[20, 80]}
      minValue={0}
      maxValue={100}
      step={5}
      thumbLabels={["Min", "Max"]}
    />
  );
}
