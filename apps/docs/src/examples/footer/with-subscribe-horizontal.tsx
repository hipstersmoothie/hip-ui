import { Footer } from "@/components/footer";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  footer: {
    paddingTop: spacing["8"],
  },
});

export function WithSubscribeHorizontal() {
  return (
    <Footer.Root style={styles.footer}>
      <Footer.Section>
        <Footer.Subscribe variant="horizontal">
          <Footer.SubscribeTitle>
            Subscribe to our newsletter
          </Footer.SubscribeTitle>
          <Footer.SubscribeDescription>
            The latest news, articles, and resources, sent to your inbox weekly.
          </Footer.SubscribeDescription>
          <Footer.SubscribeInput
            onSubmit={(e) => {
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email");
              alert(`Subscribed with: ${email}`);
            }}
          />
        </Footer.Subscribe>
      </Footer.Section>
    </Footer.Root>
  );
}
