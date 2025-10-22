import { AspectRatio } from "@/components/aspect-ratio";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { Upload } from "lucide-react";
import { Button } from "@/components/button";
import { uiColor } from "../../components/theme/semantic-color.stylex";

const styles = stylex.create({
  example: {
    height: spacing["40"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: uiColor.border1,
  },
});

export function NoImage() {
  return (
    <AspectRatio aspectRatio={16 / 9} style={styles.example}>
      <Button variant="outline">
        <Upload />
        Upload
      </Button>
    </AspectRatio>
  );
}
