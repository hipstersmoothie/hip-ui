import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export function Basic() {
  return (
    <CheckboxGroup label="Preferences" defaultValue={["email", "sms"]}>
      <Checkbox value="email">Email notifications</Checkbox>
      <Checkbox value="sms">SMS notifications</Checkbox>
      <Checkbox value="push">Push notifications</Checkbox>
    </CheckboxGroup>
  );
}
