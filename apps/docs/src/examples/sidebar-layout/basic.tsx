import { SidebarLayout } from "@/components/sidebar-layout";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";
import { Link } from "@/components/link";
import { Text } from "@/components/typography/text";
import { Body, Heading1 } from "@/components/typography";
import { Content } from "@/components/content";

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 120 120"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" stroke="black" strokeWidth="2" />
    </svg>
  );
}

export function Basic() {
  return (
    <SidebarLayout.Root>
      <SidebarLayout.Sidebar>
        <Sidebar>
          <SidebarHeader href="/">
            <Logo />
          </SidebarHeader>
          <SidebarSection title="Navigation">
            <SidebarItem>Dashboard</SidebarItem>
            <SidebarItem>Projects</SidebarItem>
            <SidebarItem>Settings</SidebarItem>
          </SidebarSection>
        </Sidebar>
      </SidebarLayout.Sidebar>
      <SidebarLayout.Page>
        <Content>
          <Heading1>Page Content</Heading1>
          <Body>
            This is the main page content area. The sidebar is on the left, and
            this content area takes up the remaining space.
          </Body>
        </Content>
      </SidebarLayout.Page>
    </SidebarLayout.Root>
  );
}
