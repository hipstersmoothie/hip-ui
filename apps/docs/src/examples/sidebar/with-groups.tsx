import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
} from "@/components/sidebar";
import { Link } from "@/components/link";

export function WithGroups() {
  return (
    <Sidebar>
      <SidebarHeader href="/">
        <Link>My App</Link>
      </SidebarHeader>
      <SidebarGroup title="Navigation">
        <SidebarItem>
          <Link href="/dashboard">Dashboard</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/analytics">Analytics</Link>
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup title="Settings">
        <SidebarItem>
          <Link href="/settings">General</Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/settings/team">Team</Link>
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
  );
}
