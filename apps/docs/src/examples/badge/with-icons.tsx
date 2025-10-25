import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react";

import { Badge } from "@/components/badge";
import { Flex } from "@/components/flex";

export function BadgeWithIcons() {
  return (
    <Flex gap="4" wrap>
      <Badge variant="success">
        <CheckCircle />
        Success
      </Badge>
      <Badge variant="warning">
        <AlertCircle />
        Warning
      </Badge>
      <Badge variant="critical">
        <XCircle />
        Error
      </Badge>
      <Badge variant="default">
        <Info />
        Info
      </Badge>
    </Flex>
  );
}
