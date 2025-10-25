import { Home } from "lucide-react";

import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function PrefixAndSuffix() {
  return (
    <Flex gap="4">
      <TextField label="Label" prefix={<Home />} />
      <TextField label="Label" suffix={<Home />} />
    </Flex>
  );
}
