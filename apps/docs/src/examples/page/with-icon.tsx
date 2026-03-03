import { LayoutDashboard } from "lucide-react";

import { Page } from "@/components/page";

export function WithIcon() {
  return (
    <Page.Root variant="large">
      <Page.Header>
        <Page.Icon>
          <LayoutDashboard size={24} />
        </Page.Icon>
        <Page.Title>Dashboard</Page.Title>
        <Page.Description>
          Overview of your application metrics and activity.
        </Page.Description>
      </Page.Header>
      <p>Page content with icon in header.</p>
    </Page.Root>
  );
}
