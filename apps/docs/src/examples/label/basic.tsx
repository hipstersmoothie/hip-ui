import { Flex } from "@/components/flex";
import { Label, Description } from "@/components/label";
import { TextField } from "@/components/text-field";

export function Basic() {
  return (
    <Flex direction="column" gap="2">
      <Label id="email-address">Email Address</Label>
      <TextField
        aria-labelledby="email-address"
        aria-describedby="email-address-description"
        placeholder="Enter your email"
      />
      <Description id="email-address-description">
        We'll never share your email with anyone else.
      </Description>
    </Flex>
  );
}
