import { Pre, InlineCode } from "@/components/typography";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  pre: {
    width: "min(80%, 340px)",
  },
});

export function PreExample() {
  return (
    <Pre style={styles.pre}>
      <InlineCode>npm install @hip-ui/core</InlineCode>
    </Pre>
  );
}
