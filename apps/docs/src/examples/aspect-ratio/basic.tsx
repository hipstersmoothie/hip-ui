import { AspectRatio, AspectRatioImage } from "@/components/aspect-ratio";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  example: {
    height: spacing["40"],
  },
});

export function Basic() {
  return (
    <AspectRatio style={styles.example}>
      <AspectRatioImage src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy" />
    </AspectRatio>
  );
}
