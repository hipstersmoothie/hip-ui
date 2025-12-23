import { Footer } from "@/components/footer";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  footer: {
    paddingTop: spacing["8"],
  },
});

export function WithSubscribeVertical() {
  return (
    <Footer.Root style={styles.footer}>
      <Footer.Section>
        <Footer.Subscribe variant="vertical">
          <Footer.SubscribeTitle>
            Subscribe to our newsletter
          </Footer.SubscribeTitle>
          <Footer.SubscribeDescription>
            The latest news, articles, and resources, sent to your inbox weekly.
          </Footer.SubscribeDescription>
          <Footer.SubscribeInput />
        </Footer.Subscribe>
      </Footer.Section>
    </Footer.Root>
  );
}
