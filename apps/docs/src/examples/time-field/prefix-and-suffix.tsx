import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";
import { ClockIcon } from "lucide-react";

export function PrefixAndSuffix() {
  return (
    <Flex gap="4">
      <TimeField label="Time" prefix={<ClockIcon />} />
      <TimeField label="Time" suffix={<ClockIcon />} />
    </Flex>
  );
}
