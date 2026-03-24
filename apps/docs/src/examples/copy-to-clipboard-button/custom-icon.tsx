import * as stylex from "@stylexjs/stylex";
import { Check } from "lucide-react";

import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Flex } from "@/components/flex";

import { uiColor } from "../../components/theme/color.stylex";
import { radius } from "../../components/theme/radius.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { fontFamily, fontSize } from "../../components/theme/typography.stylex";

const styles = stylex.create({
  codeBlock: {
    padding: spacing["2"],
    borderRadius: radius.sm,
    cornerShape: "squircle",
    backgroundColor: uiColor.component1,
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
  },
});

export function CustomIcon() {
  const codeToCopy = "pnpm hip install copy-to-clipboard-button";

  return (
    <Flex gap="1" align="center">
      <div {...stylex.props(styles.codeBlock)}>{codeToCopy}</div>
      <CopyToClipboardButton text={codeToCopy} icon={<Check />} />
    </Flex>
  );
}
