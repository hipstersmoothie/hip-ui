import * as stylex from "@stylexjs/stylex";
import { useEffect, useRef, useState } from "react";
import { examples } from "virtual:examples";

import { Card } from "@/components/card";
import { Flex } from "@/components/flex";

import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

const styles = stylex.create({
  card: {
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    cornerShape: "squircle",
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
    overflow: "hidden",
  },
  preview: {
    alignItems: "center",
    backgroundColor: uiColor.bgSubtle,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: spacing["40"],
    padding: spacing["4"],
  },
  codeWrapper: {
    borderTopColor: uiColor.border2,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    position: "relative",
  },
  code: {
    /* eslint-disable @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles */
    ":is(*) pre": {
      borderBottomLeftRadius: radius["lg"],
      borderBottomRightRadius: radius["lg"],
      margin: 0,
      paddingBottom: spacing["4"],
      paddingLeft: spacing["4"],
      paddingRight: spacing["4"],
      paddingTop: spacing["4"],
    },
    ":is(*) code": {},
    /* eslint-enable @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles */
  },
  copyButton: {
    position: "absolute",
    right: spacing["3"],
    top: spacing["3"],
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
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect, react-hooks/set-state-in-effect
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
            // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
            dangerouslySetInnerHTML={{ __html: code }}
          />
          <CopyToClipboardButton style={styles.copyButton} text={textContent} />
        </div>
      </Flex>
    </Card>
  );
}
