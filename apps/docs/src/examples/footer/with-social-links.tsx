import * as stylex from "@stylexjs/stylex";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

import { Footer } from "@/components/footer";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  footer: {
    paddingTop: spacing["8"],
  },
});

export function WithSocialLinks() {
  return (
    <Footer.Root style={styles.footer}>
      <Footer.Section>
        <Footer.Copyright>
          © 2025 Company Name. All rights reserved.
        </Footer.Copyright>
        <Footer.SocialLinkList>
          <Footer.SocialLinkItem
            href="https://facebook.com"
            aria-label="Facebook"
            icon={<Facebook />}
          />
          <Footer.SocialLinkItem
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<Twitter />}
          />
          <Footer.SocialLinkItem
            href="https://instagram.com"
            aria-label="Instagram"
            icon={<Instagram />}
          />
          <Footer.SocialLinkItem
            href="https://github.com"
            aria-label="GitHub"
            icon={<Github />}
          />
        </Footer.SocialLinkList>
      </Footer.Section>
    </Footer.Root>
  );
}
