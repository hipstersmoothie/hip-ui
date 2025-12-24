"use client";

import { useState } from "react";
import { Alert } from "@/components/alert";

export function Dismissible() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Alert
      variant="info"
      title="Dismissible Alert"
      onDismiss={() => setIsVisible(false)}
    >
      This alert can be dismissed by clicking the close button.
    </Alert>
  );
}
