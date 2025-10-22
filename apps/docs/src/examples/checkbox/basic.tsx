import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export function Basic() {
  return (
    <CheckboxGroup label="Preferences">
      <Checkbox>Email notifications</Checkbox>
      <Checkbox>SMS notifications</Checkbox>
      <Checkbox>Push notifications</Checkbox>
    </CheckboxGroup>
  );
}
