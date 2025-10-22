import { TextField } from "@/components/text-field";
import { Flex } from "@/components/flex";

export function TextFieldVariants() {
  return (
    <Flex gap="4">
      <TextField
        label="Default"
        placeholder="Default variant"
        variant="primary"
      />
      <TextField
        label="Filled"
        placeholder="Filled variant"
        variant="secondary"
      />
      <TextField
        label="Filled"
        placeholder="Filled variant"
        variant="tertiary"
      />
    </Flex>
  );
}
