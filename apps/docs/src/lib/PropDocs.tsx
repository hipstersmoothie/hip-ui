import type { ComponentDoc } from "react-docgen-typescript";

import * as stylex from "@stylexjs/stylex";
import { Grid } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { ResizableTableContainer } from "react-aria-components";
import { propDocs } from "virtual:propDocs";

import { Card } from "@/components/card";
import { Flex } from "@/components/flex";
import { HoverCard } from "@/components/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/table";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { InlineCode, SmallBody } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { uiColor } from "../components/theme/color.stylex";
import { radius } from "../components/theme/radius.stylex";
import { shadow } from "../components/theme/shadow.stylex";
import { spacing } from "../components/theme/spacing.stylex";

const styles = stylex.create({
  sticky: {
    position: "sticky",
    left: 0,
  },
  stuck: {
    backgroundColor: uiColor.bg,
    boxShadow: shadow.lg,
    borderRightColor: uiColor.border2,
    borderRightStyle: "solid",
    borderRightWidth: 1,
  },
  props: {
    overflow: "auto",
  },
  highlightedCode: {
    width: "fit-content",

    /* eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles */
    ":is(*) pre": {
      margin: 0,
      padding: spacing["1"],
      borderColor: uiColor.border1,
      borderRadius: {
        default: radius["md"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      borderStyle: "solid",
      borderWidth: 1,
      cornerShape: "squircle",
    },
  },
  fullCodePopover: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  fullCode: {
    height: "100%",
    width: "100%",

    /* eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles */
    ":is(*) pre": {
      margin: 0,
      padding: spacing["4"],
      borderWidth: 0,
      height: "100%",
      width: "100%",
    },
  },
});

function HighlightedCode({ code }: { code: string }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setIsOverflowing(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [ref]);

  const codeElement = (
    <div
      // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
      dangerouslySetInnerHTML={{ __html: code }}
      {...stylex.props(styles.highlightedCode)}
    />
  );

  return (
    <div ref={ref}>
      {isOverflowing ? (
        <HoverCard
          placement="top"
          trigger={codeElement}
          style={styles.fullCodePopover}
        >
          <div
            // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
            dangerouslySetInnerHTML={{ __html: code }}
            {...stylex.props(styles.fullCode)}
          />
        </HoverCard>
      ) : (
        codeElement
      )}
    </div>
  );
}

function PropTable({ doc }: { doc: ComponentDoc }) {
  const [hasScrollX, setHasScrollX] = useState(false);

  return (
    <Card
      size="sm"
      style={styles.props}
      onScroll={(e) => setHasScrollX(e.currentTarget.scrollLeft > 0)}
    >
      <ResizableTableContainer>
        <Table size="md">
          <TableHeader>
            <TableColumn
              isRowHeader
              width={200}
              style={[styles.sticky, hasScrollX && styles.stuck]}
            >
              Name
            </TableColumn>
            <TableColumn width={200}>Type</TableColumn>
            <TableColumn width={200}>Default</TableColumn>
            <TableColumn minWidth={300}>Description</TableColumn>
          </TableHeader>
          <TableBody>
            {Object.values(doc.props).map((prop) => (
              <TableRow key={prop.name}>
                <TableCell style={[styles.sticky, hasScrollX && styles.stuck]}>
                  <InlineCode>{prop.name}</InlineCode>
                </TableCell>
                <TableCell>
                  <HighlightedCode code={prop.type.name} />
                </TableCell>
                <TableCell>
                  {prop.defaultValue ? (
                    <HighlightedCode
                      code={(prop.defaultValue as { value: string }).value}
                    />
                  ) : (
                    <SmallBody variant="secondary">---</SmallBody>
                  )}
                </TableCell>
                <TableCell>
                  <SmallBody variant="secondary">{prop.description}</SmallBody>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ResizableTableContainer>
    </Card>
  );
}

export function PropDocs({ components }: { components: Array<string> }) {
  const docs = propDocs
    .filter((doc) => components.includes(doc.displayName))
    .toSorted((a, b) => {
      const aIndex = components.indexOf(a.displayName);
      const bIndex = components.indexOf(b.displayName);
      return aIndex - bIndex;
    });
  const [selected, setSelected] = useState(docs[0].displayName);

  return (
    <Flex direction="column" gap="6">
      {docs.length > 1 && (
        <ToggleButtonGroup
          variant="grouped"
          selectionMode="single"
          onSelectionChange={(keys) =>
            setSelected(keys.values().next().value as string)
          }
        >
          <ToggleButton variant="outline" id="all">
            <Grid />
          </ToggleButton>
          {docs.map((doc) => (
            <ToggleButton
              key={doc.displayName}
              id={doc.displayName}
              variant="outline"
            >
              {doc.displayName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
      {docs.map(
        (doc) =>
          (selected === doc.displayName || selected === "all") && (
            <Flex key={doc.displayName} direction="column" gap="4">
              {selected === "all" && (
                <Text weight="semibold">{doc.displayName}</Text>
              )}
              <PropTable doc={doc} />
            </Flex>
          ),
      )}
    </Flex>
  );
}
