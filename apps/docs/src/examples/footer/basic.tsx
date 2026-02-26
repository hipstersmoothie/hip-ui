import * as stylex from "@stylexjs/stylex";

import { Footer } from "@/components/footer";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  footer: {
    paddingTop: spacing["8"],
  },
});

export function Basic() {
  return (
    <Footer.Root style={styles.footer} isCentered>
      <Footer.Section>
        <Footer.Copyright>
          © 2025 Company Name. All rights reserved.
        </Footer.Copyright>
      </Footer.Section>
    </Footer.Root>
  );
}
