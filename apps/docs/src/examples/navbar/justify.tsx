import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarNavigation,
} from "@/components/navbar";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  wrapper: {
    width: "80%",
    boxSizing: "border-box",
  },
});

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

export function Justify() {
  return (
    <Flex direction="column" gap="8" style={styles.wrapper}>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Left (default)</h3>
        <Navbar>
          <NavbarLogo>
            <Logo />
          </NavbarLogo>
          <NavbarNavigation justify="left">
            <NavbarLink href="/dashboard">Dashboard</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/settings">Settings</NavbarLink>
          </NavbarNavigation>
          <NavbarAction>
            <Button variant="primary">Sign In</Button>
          </NavbarAction>
        </Navbar>
      </div>

      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Center</h3>
        <Navbar>
          <NavbarLogo>
            <Logo />
          </NavbarLogo>
          <NavbarNavigation justify="center">
            <NavbarLink href="/dashboard">Dashboard</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/settings">Settings</NavbarLink>
          </NavbarNavigation>
          <NavbarAction>
            <Button variant="primary">Sign In</Button>
          </NavbarAction>
        </Navbar>
      </div>

      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Right</h3>
        <Navbar>
          <NavbarLogo>
            <Logo />
          </NavbarLogo>
          <NavbarNavigation justify="right">
            <NavbarLink href="/dashboard">Dashboard</NavbarLink>
            <NavbarLink href="/projects">Projects</NavbarLink>
            <NavbarLink href="/settings">Settings</NavbarLink>
          </NavbarNavigation>
          <NavbarAction>
            <Button variant="primary">Sign In</Button>
          </NavbarAction>
        </Navbar>
      </div>
    </Flex>
  );
}
