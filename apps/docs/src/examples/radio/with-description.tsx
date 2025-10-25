import { RadioGroup, Radio } from "@/components/radio";

export function RadioWithDescription() {
  return (
    <RadioGroup label="Payment Method">
      <Radio value="credit">
        <div>
          <div>Credit Card</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Pay with your credit card securely
          </div>
        </div>
      </Radio>
      <Radio value="paypal">
        <div>
          <div>PayPal</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Use your PayPal account
          </div>
        </div>
      </Radio>
      <Radio value="bank">
        <div>
          <div>Bank Transfer</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>
            Direct transfer from your bank account
          </div>
        </div>
      </Radio>
    </RadioGroup>
  );
}
