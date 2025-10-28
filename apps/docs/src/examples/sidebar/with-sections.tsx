import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";
import { Link } from "@/components/link";

export function WithSections() {
  return (
    <Sidebar>
      <SidebarHeader href="/">
        <Link>My App</Link>
      </SidebarHeader>
      <SidebarSection title="Navigation">
        <SidebarItem>
          <Link href="/dashboard">Dashboard</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/analytics">Analytics</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/reports">Reports</Link>
        </SidebarItem>
      </SidebarSection>
      <SidebarSection title="Settings">
        <SidebarItem>
          <Link href="/settings">General</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/settings/team">Team</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/settings/billing">Billing</Link>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  );
}
