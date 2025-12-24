import { HeaderLayout } from "@/components/header-layout";
import {
  Navbar,
  NavbarLogo,
  NavbarNavigation,
  NavbarLink,
} from "@/components/navbar";

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 120 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Basic() {
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
        <h1>Page Content</h1>
        <p>This is the main page content area.</p>
      </HeaderLayout.Page>
    </HeaderLayout.Root>
  );
}
