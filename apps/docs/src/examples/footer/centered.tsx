import { Footer } from "@/components/footer";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";
import { Link } from "../../components/link";

const styles = stylex.create({
  footer: {
    paddingTop: spacing["8"],
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

export function Centered() {
  return (
    <Footer.Root style={styles.footer} isCentered>
      <Footer.Section>
        <Footer.Logo>
          <Logo />
        </Footer.Logo>
        <Footer.NavSection>
          <Footer.NavGroup title="Product">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Documentation</Link>
            <Link href="/changelog">Changelog</Link>
          </Footer.NavGroup>
          <Footer.NavGroup title="Company">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </Footer.NavGroup>
          <Footer.NavGroup title="Resources">
            <Link href="/support">Support</Link>
            <Link href="/community">Community</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/guides">Guides</Link>
          </Footer.NavGroup>
          <Footer.NavGroup title="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/licenses">Licenses</Link>
          </Footer.NavGroup>
        </Footer.NavSection>
      </Footer.Section>
      <Footer.Section>
        <Footer.Copyright>
          © 2025 Company Name. All rights reserved.
        </Footer.Copyright>
      </Footer.Section>
    </Footer.Root>
  );
}
