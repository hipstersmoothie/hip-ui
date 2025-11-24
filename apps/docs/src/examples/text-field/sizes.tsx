import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";
import { CheckCircle } from "lucide-react";

export function TextFieldSizes() {
  return (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="2">
        <TextField
          label="Small"
          placeholder="Small size"
          size="sm"
          suffix={<CheckCircle />}
        />
        <TextField
          aria-label="Small"
          placeholder="Small size"
          size="sm"
          prefix={<CheckCircle />}
        />
      </Flex>
      <Flex direction="column" gap="2">
        <TextField
          label="Medium"
          placeholder="Medium size"
          size="md"
          suffix={<CheckCircle />}
        />
        <TextField
          aria-label="Medium"
          placeholder="Medium size"
          size="md"
          prefix={<CheckCircle />}
        />
      </Flex>
      <Flex direction="column" gap="2">
        <TextField
          label="Large"
          placeholder="Large size"
          size="lg"
          suffix={<CheckCircle />}
        />
        <TextField
          aria-label="Large"
          placeholder="Large size"
          size="lg"
          prefix={<CheckCircle />}
        />
      </Flex>
    </Flex>
  );
}
