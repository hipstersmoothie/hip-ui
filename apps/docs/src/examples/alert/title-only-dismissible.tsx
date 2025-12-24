"use client";

import { useState } from "react";
import { Alert } from "@/components/alert";
import { Flex } from "@/components/flex";

export function TitleOnlyDismissible() {
  const [infoVisible, setInfoVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(true);

  return (
    <Flex gap="4" direction="column">
      {infoVisible && (
        <Alert
          variant="info"
          title="Information"
          onDismiss={() => setInfoVisible(false)}
        />
      )}
      {successVisible && (
        <Alert
          variant="success"
          title="Success"
          onDismiss={() => setSuccessVisible(false)}
        />
      )}
    </Flex>
  );
}
