import { Flex } from "@/components/flex";
import { RadioGroup, Radio } from "@/components/radio";

export function RadioHorizontal() {
  return (
    <RadioGroup label="Size" orientation="horizontal">
      <Flex gap="4">
        <Radio value="small">Small</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="large">Large</Radio>
        <Radio value="xlarge">X-Large</Radio>
      </Flex>
    </RadioGroup>
  );
}
