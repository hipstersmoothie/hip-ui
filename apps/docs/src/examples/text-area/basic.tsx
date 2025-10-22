import { TextArea } from "@/components/text-area";

export function Basic() {
  return (
    <TextArea
      label="Message"
      placeholder="Enter your message here..."
      description="Please provide detailed information"
    />
  );
}
