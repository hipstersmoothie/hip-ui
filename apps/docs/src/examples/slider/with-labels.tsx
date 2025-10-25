import { Slider } from "../../components/slider";

export function WithLabels() {
  return (
    <Slider
      label="Temperature"
      defaultValue={75}
      minValue={0}
      maxValue={100}
      step={1}
      thumbLabels={["Temperature"]}
    />
  );
}
