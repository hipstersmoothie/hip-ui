import { Lightbulb } from "lucide-react";
import { Alert } from "@/components/alert";

export function CustomIcon() {
  return (
    <Alert
      variant="info"
      title="Custom Icon"
      icon={<Lightbulb />}
    >
      This alert uses a custom icon instead of the default icon.
    </Alert>
  );
}

