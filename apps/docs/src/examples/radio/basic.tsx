import { RadioGroup, Radio } from "@/components/radio";

export function Basic() {
  return (
    <RadioGroup label="Choose an option">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}
