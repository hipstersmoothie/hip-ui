import * as stylex from "@stylexjs/stylex";

import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { Flex } from "@/components/flex";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  codeBlock: {
    padding: spacing["2"],
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: "monospace",
  },
});

export function Basic() {
  const codeToCopy = "npm install hip-ui";

  return (
    <Flex gap="1" align="center">
      <div {...stylex.props(styles.codeBlock)}>{codeToCopy}</div>
      <CopyToClipboardButton text={codeToCopy} />
    </Flex>
  );
}
