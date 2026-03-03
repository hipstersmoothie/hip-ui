import { Page } from "@/components/page";

export function Basic() {
  return (
    <Page.Root variant="small">
      <Page.Header>
        <Page.BackLink />
        <Page.Title>Page Title</Page.Title>
      </Page.Header>
      <p>Page content goes here.</p>
    </Page.Root>
  );
}
