import { Button } from "@/components/button";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarNavigation,
} from "@/components/navbar";
import * as stylex from "@stylexjs/stylex";
import { uiColor } from "../../components/theme/color.stylex";
import { radius } from "../../components/theme/radius.stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    containerType: "inline-size",
    height: "400px",
    width: "90%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: uiColor.border1,
    borderRadius: radius["lg"],
    overflow: "hidden",
    margin: spacing["4"],
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

export function ActiveLink() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Navbar>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarNavigation justify="center">
          <NavbarLink href="/dashboard" isActive>
            Dashboard
          </NavbarLink>
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/settings">Settings</NavbarLink>
          <NavbarLink href="/analytics">Analytics</NavbarLink>
        </NavbarNavigation>
        <NavbarAction>
          <Button variant="primary">Sign In</Button>
        </NavbarAction>
      </Navbar>
    </div>
  );
}
