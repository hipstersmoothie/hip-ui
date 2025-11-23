import * as stylex from "@stylexjs/stylex";
import { Upload } from "lucide-react";

import { AspectRatio } from "@/components/aspect-ratio";
import { Button } from "@/components/button";

import { uiColor } from "../../components/theme/color.stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  example: {
    alignItems: "center",
    borderColor: uiColor.border1,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    height: spacing["40"],
    justifyContent: "center",
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
