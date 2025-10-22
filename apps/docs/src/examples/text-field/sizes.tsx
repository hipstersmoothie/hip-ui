import { TextField } from "@/components/text-field";
import { Flex } from "@/components/flex";

export function TextFieldSizes() {
  return (
    <Flex direction="column" gap="4">
      <TextField label="Small" placeholder="Small size" size="sm" />
      <TextField label="Medium" placeholder="Medium size" size="md" />
      <TextField label="Large" placeholder="Large size" size="lg" />
    </Flex>
  );
}
