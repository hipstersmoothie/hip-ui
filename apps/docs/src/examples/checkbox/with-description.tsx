import { Checkbox, CheckboxGroup } from "@/components/checkbox";
import { Flex } from "@/components/flex";

export function CheckboxWithDescription() {
  return (
    <CheckboxGroup label="Notifications">
      <Checkbox>
        <div>
          <div>Email notifications</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Receive updates about your account
          </div>
        </div>
      </Checkbox>
      <Checkbox>
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
