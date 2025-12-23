import { HeaderLayout } from "@/components/header-layout";
import {
  Navbar,
  NavbarLogo,
  NavbarNavigation,
  NavbarLink,
} from "@/components/navbar";
import { Button } from "@/components/button";
import { Heading1 } from "@/components/typography";
import { Flex } from "@/components/flex";
import * as stylex from "@stylexjs/stylex";
import { Text } from "@/components/typography/text";

const styles = stylex.create({
  heroTitle: {
    margin: 0,
  },
  heroDescription: {
    margin: 0,
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

export function WithHero() {
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
      <HeaderLayout.Hero>
        <Flex direction="column" gap="8" align="start">
          <Flex direction="column">
            <Heading1 style={styles.heroTitle}>
              Welcome to Our Platform
            </Heading1>
            <Text>This is a hero section with a primary color background.</Text>
          </Flex>
          <Button>Get Started</Button>
        </Flex>
      </HeaderLayout.Hero>
      <HeaderLayout.Page>
        <h2>Page Content</h2>
        <p>This is the main page content area.</p>
      </HeaderLayout.Page>
    </HeaderLayout.Root>
  );
}
