import { Label, Description } from "@/components/label";
import { TextField } from "@/components/text-field";

export function Basic() {
  return (
    <div>
      <Label>Email Address</Label>
      <TextField placeholder="Enter your email" />
      <Description>We'll never share your email with anyone else.</Description>
    </div>
  );
}
