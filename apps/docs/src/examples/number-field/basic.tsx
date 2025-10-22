import { NumberField } from "@/components/number-field";

export function Basic() {
  return (
    <NumberField
      label="Quantity"
      placeholder="Enter a number"
      minValue={0}
      maxValue={100}
    />
  );
}
