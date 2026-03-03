import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Page } from "@/components/page";

export function LargeVariant() {
  return (
    <Page.Root variant="large">
      <Page.Header>
        <Flex align="center" gap="3">
          <Page.BackLink />
          <Flex direction="column" gap="2">
            <Page.Title>Large Page Title</Page.Title>
            <Page.Description>
              This is a description for the large page layout.
            </Page.Description>
          </Flex>
        </Flex>
        <Page.Actions>
          <Button size="lg">Action</Button>
        </Page.Actions>
      </Page.Header>
      <p>Full-width page content goes here.</p>
    </Page.Root>
  );
}
