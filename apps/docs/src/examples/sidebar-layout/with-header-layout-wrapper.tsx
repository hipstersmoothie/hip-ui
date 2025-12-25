import { SidebarLayout } from "@/components/sidebar-layout";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";
import { HeaderLayout } from "@/components/header-layout";
import {
  Navbar,
  NavbarLink,
  NavbarLogo,
  NavbarNavigation,
} from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Content } from "@/components/content";
import { Heading1 } from "@/components/typography";
import { Body } from "@/components/typography";

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

export function WithHeaderLayoutWrapper() {
  return (
    <HeaderLayout.Root>
      <HeaderLayout.Header>
        <Navbar>
          <NavbarLogo>
            <Logo />
          </NavbarLogo>
          <NavbarNavigation justify="right">
            <NavbarLink href="/dashboard">Dashboard</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/settings">Settings</NavbarLink>
          </NavbarNavigation>
        </Navbar>
      </HeaderLayout.Header>
      <HeaderLayout.Page>
        <SidebarLayout.Root>
          <SidebarLayout.NavigationSidebar>
            <Sidebar>
              <SidebarSection title="Navigation">
                <SidebarItem>Dashboard</SidebarItem>
                <SidebarItem>Projects</SidebarItem>
                <SidebarItem>Settings</SidebarItem>
              </SidebarSection>
            </Sidebar>
          </SidebarLayout.NavigationSidebar>
          <SidebarLayout.Page>
            <Content>
              <Heading1>Page Content</Heading1>
              <Body>
                This is the main page content area. The sidebar is on the left,
                and this content area takes up the remaining space.
              </Body>
            </Content>
          </SidebarLayout.Page>
        </SidebarLayout.Root>
      </HeaderLayout.Page>
      <HeaderLayout.Footer>
        <Footer.Root>
          <Footer.Section>
            <Footer.Copyright>
              © 2025 Company Name. All rights reserved.
            </Footer.Copyright>
          </Footer.Section>
        </Footer.Root>
      </HeaderLayout.Footer>
    </HeaderLayout.Root>
  );
}
