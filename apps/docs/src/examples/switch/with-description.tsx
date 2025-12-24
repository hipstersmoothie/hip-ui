import { Flex } from "@/components/flex";
import { Switch } from "@/components/switch";

export function SwitchWithDescription() {
  return (
    <Flex direction="column" gap="4">
      <div>
        <Switch>Enable notifications</Switch>
        <div
          style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.25rem" }}
        >
          Receive email notifications about important updates
        </div>
      </div>
      <div>
        <Switch>Dark mode</Switch>
        <div
          style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.25rem" }}
        >
          Switch to dark theme for better viewing in low light
        </div>
      </div>
    </Flex>
  );
}
