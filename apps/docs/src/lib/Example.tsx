import { Card } from "@/components/card";
import { examples } from "virtual:examples";
import * as stylex from "@stylexjs/stylex";
import { Flex } from "@/components/flex";
import { spacing } from "../components/theme/spacing.stylex";
import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { useEffect, useRef, useState } from "react";

const styles = stylex.create({
  card: {
    overflow: "hidden",
    borderRadius: radius["lg"],
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
  preview: {
    minHeight: spacing["40"],
    padding: spacing["4"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: uiColor.bgSubtle,
  },
  codeWrapper: {
    position: "relative",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: uiColor.border2,
  },
  code: {
    ":is(*) pre": {
      margin: 0,
      paddingTop: spacing["4"],
      paddingBottom: spacing["4"],
      paddingLeft: spacing["4"],
      paddingRight: spacing["4"],
      borderBottomLeftRadius: radius["lg"],
      borderBottomRightRadius: radius["lg"],
    },
    ":is(*) code": {},
  },
  copyButton: {
    position: "absolute",
    top: spacing["3"],
    right: spacing["3"],
  },
});

export function Example({
  src: Component,
}: {
  src: (() => React.JSX.Element) & { slug: string };
}) {
  const code = examples[Component.slug];
  const ref = useRef<HTMLDivElement>(null);
  const [textContent, setTextContent] = useState("error");

  useEffect(() => {
    setTextContent(ref.current?.textContent ?? "error");
  }, [code]);

  return (
    <Card style={styles.card}>
      <Flex direction="column">
        <div {...stylex.props(styles.preview)}>
          <Component />
        </div>

        <div {...stylex.props(styles.codeWrapper)}>
          <div
            ref={ref}
            {...stylex.props(styles.code)}
            dangerouslySetInnerHTML={{ __html: code }}
          />
          <CopyToClipboardButton style={styles.copyButton} text={textContent} />
        </div>
      </Flex>
    </Card>
  );
}
