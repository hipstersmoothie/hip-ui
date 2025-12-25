import { Check } from "lucide-react";

import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Flex } from "@/components/flex";

import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  codeBlock: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
    fontFamily: "monospace",
    padding: spacing["2"],
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
