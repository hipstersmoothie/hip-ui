import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";
import { Home } from "lucide-react";

export function PrefixAndSuffix() {
  return (
    <Flex gap="4">
      <TextField label="Label" prefix={<Home />} />
      <TextField label="Label" suffix={<Home />} />
    </Flex>
  );
}
