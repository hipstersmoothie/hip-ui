import { Button } from "@/components/button";
import { createLink } from "@tanstack/react-router";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarNavigation,
  NavbarMenuTrigger,
} from "@/components/navbar";
import * as stylex from "@stylexjs/stylex";
import { uiColor } from "../../components/theme/color.stylex";
import { radius } from "../../components/theme/radius.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { ChevronDownIcon, CodeIcon, PhoneIcon, WebcamIcon } from "lucide-react";

const NavbarMenuItemLink = createLink(NavbarMenuItem);

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

export function WithMenus() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Navbar>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarNavigation justify="center">
          <NavbarLink href="/dashboard">Dashboard</NavbarLink>
          <NavbarMenu
            trigger={
              <NavbarMenuTrigger>
                Products <ChevronDownIcon />
              </NavbarMenuTrigger>
            }
          >
            <NavbarMenuItemLink
              icon={<WebcamIcon />}
              label="Web App"
              description="A web app for managing your products"
              to="/"
            />
            <NavbarMenuItemLink
              icon={<PhoneIcon />}
              label="Mobile App"
              description="A mobile app for managing your products"
              to="/"
            />
            <NavbarMenuItemLink
              icon={<CodeIcon />}
              label="API"
              description="An API for managing your products"
              to="/"
            />
          </NavbarMenu>
          <NavbarLink href="/about">About</NavbarLink>
        </NavbarNavigation>
        <NavbarAction>
          <Button variant="primary">Sign In</Button>
        </NavbarAction>
      </Navbar>
    </div>
  );
}
