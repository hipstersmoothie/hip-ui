import { Switch } from "@/components/switch";
import { Flex } from "@/components/flex";

export function SwitchStates() {
  return (
    <Flex direction="column" gap="4">
      <Switch>Unchecked</Switch>
      <Switch defaultSelected>Checked</Switch>
      <Switch isDisabled>Disabled</Switch>
    </Flex>
  );
}
