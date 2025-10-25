import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export function CheckboxWithDescription() {
  return (
    <CheckboxGroup label="Notifications">
      <Checkbox value="email">
        <div>
          <div>Email notifications</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Receive updates about your account
          </div>
        </div>
      </Checkbox>
      <Checkbox value="sms">
        <div>
          <div>SMS notifications</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Get text messages for important updates
          </div>
        </div>
      </Checkbox>
    </CheckboxGroup>
  );
}
