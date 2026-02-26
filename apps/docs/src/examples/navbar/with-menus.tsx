import * as stylex from "@stylexjs/stylex";
import { createLink } from "@tanstack/react-router";
import { ChevronDownIcon, CodeIcon, PhoneIcon, WebcamIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Navbar,
  NavbarAction,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuTrigger,
  NavbarNavigation,
} from "@/components/navbar";

import { uiColor } from "../../components/theme/color.stylex";
import { radius } from "../../components/theme/radius.stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const NavbarMenuItemLink = createLink(NavbarMenuItem);

const styles = stylex.create({
  wrapper: {
    borderColor: uiColor.border1,
    borderRadius: radius["lg"],
    borderStyle: "solid",
    margin: spacing["4"],
    containerType: "inline-size",
    borderWidth: 1,
    height: "400px",
    overflow: "hidden",
    width: "90%",
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
