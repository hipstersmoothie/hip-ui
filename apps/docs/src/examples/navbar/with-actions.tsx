import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarNavigation,
} from "@/components/navbar";
import { Bell, Search } from "lucide-react";

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

export function WithActions() {
  return (
    <Navbar>
      <NavbarLogo>
        <Logo />
      </NavbarLogo>
      <NavbarNavigation justify="center">
        <NavbarLink href="/dashboard">Dashboard</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
        <NavbarLink href="/settings">Settings</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </NavbarNavigation>
      <NavbarAction>
        <IconButton aria-label="Search" variant="tertiary">
          <Search />
        </IconButton>
        <IconButton aria-label="Notifications" variant="tertiary">
          <Bell />
        </IconButton>
        <Button variant="primary">Sign In</Button>
      </NavbarAction>
    </Navbar>
  );
}
