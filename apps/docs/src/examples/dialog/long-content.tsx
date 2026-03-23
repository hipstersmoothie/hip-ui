import { Button } from "@/components/button";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import { Flex } from "@/components/flex";
import { Body } from "@/components/typography";

const paragraphs = [
  "This example is intentionally long so you can verify that the dialog body scrolls independently while the header and footer remain easy to reach.",
  "Longer dialogs are useful for policies, onboarding steps, release notes, audit details, or any workflow where users need to review a lot of content before taking action.",
  "Keeping the content inside the dialog body also prevents the overall page from jumping unexpectedly when the modal opens on smaller screens.",
  "The header stays visible so the user always knows which task they are in, and the footer stays close at hand so the primary and secondary actions remain accessible.",
  "If your dialog contains a form, this same pattern helps users scroll through guidance, field groups, and validation messages without losing the submit actions.",
  "You can also combine long-form text with lists, media, tables, or sections as long as the core interaction still fits comfortably inside a modal experience.",
  "When content grows beyond a simple confirmation, it is usually a good idea to keep the title concise and let the body carry the detailed explanation.",
  "For especially dense content, consider splitting the experience into sections or steps so the modal does not feel overwhelming even when it needs to be comprehensive.",
  "This sample keeps the copy simple, but the important part is that the content is long enough to exercise overflow behavior in a realistic layout.",
  "After reviewing the content, the user can cancel or continue without needing to scroll all the way back to the top of the dialog.",
];

export function LongContentDialog() {
  return (
    <Dialog trigger={<Button>Open Long Content Dialog</Button>}>
      <DialogHeader>Review Details</DialogHeader>
      <DialogBody>
        <Flex direction="column" gap="4">
          {paragraphs.map((paragraph) => (
            <Body key={paragraph}>{paragraph}</Body>
          ))}
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary">Close</Button>
        <Button>Continue</Button>
      </DialogFooter>
    </Dialog>
  );
}
