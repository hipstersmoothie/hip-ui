"use client";

import * as stylex from "@stylexjs/stylex";
import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Tooltip } from "../components/tooltip";
import { ArrowRight, Clock, Plus } from "lucide-react";
import {
  Blockquote,
  Body,
  SmallBody,
  InlineCode,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  ListItem,
  OrderedList,
  UnorderedList,
} from "./typography";
import { gray } from "./theme/semantic-color.stylex";
import { spacing } from "./theme/spacing.stylex";
import { IconButton } from "./icon-button";
import { Popover } from "./popover";
import { Fragment } from "react/jsx-runtime";

const styles = stylex.create({
  container: {
    padding: spacing["16"],
  },
  buttonLabel: {
    width: 80,
    textTransform: "capitalize",
  },
});

function Typography() {
  return (
    <Flex direction="column" gap="4">
      <Heading1>Heading 1</Heading1>
      <Body>
        This is a body text. You can use <InlineCode>InlineCode</InlineCode> to
        highlight code.
      </Body>
      <Blockquote>This is a blockquote.</Blockquote>
      <Heading2>Heading 2</Heading2>
      <Body>This is a body text.</Body>
      <UnorderedList>
        <ListItem>This is a list item.</ListItem>
        <ListItem>This is a list item.</ListItem>
        <ListItem>This is a list item.</ListItem>
      </UnorderedList>
      <Body>This is a body text.</Body>
      <Heading3>Heading 3</Heading3>
      <Body>This is a body text.</Body>
      <OrderedList>
        <ListItem>This is a list item.</ListItem>
        <ListItem>This is a list item.</ListItem>
      </OrderedList>
      <Heading4>Heading 4</Heading4>
    </Flex>
  );
}

const buttons = ["primary", "secondary", "tertiary", "outline"] as const;
const buttonSizes = ["sm", "md", "lg"] as const;

function Buttons() {
  return (
    <Flex direction="column" gap="4">
      {buttons.map((button) => (
        <Flex align="center" gap="2">
          <SmallBody style={[styles.buttonLabel, gray.textDim]}>
            {button}
          </SmallBody>

          <Flex align="center" gap="8">
            {buttonSizes.map((size) => (
              <Flex align="center" gap="2" key={`${button}-${size}`}>
                <IconButton variant={button} label="Add Another" size={size}>
                  <Plus />
                </IconButton>
                <Button variant={button} size={size}>
                  Button
                </Button>
                <Button variant={button} size={size}>
                  <Plus />
                  Add Another
                </Button>
                <Button variant={button} size={size}>
                  Next
                  <ArrowRight />
                </Button>
                <Button variant={button} isDisabled size={size}>
                  Button
                </Button>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

function Tooltips() {
  return (
    <Flex direction="column" gap="4" align="start">
      <Tooltip text="Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </Flex>
  );
}

function Popovers() {
  return (
    <Flex direction="column" gap="4" align="start">
      <Popover trigger={<Button>Hover me</Button>} placement="top">
        <SmallBody>Content</SmallBody>
      </Popover>
    </Flex>
  );
}

export function KitchenSink() {
  return (
    <Flex
      direction="column"
      gap="10"
      style={[gray.bg, gray.text, styles.container]}
    >
      <Flex direction="column" gap="4">
        <Heading1>Buttons</Heading1>
        <Buttons />
      </Flex>

      <Flex direction="column" gap="4">
        <Heading1>Tooltips</Heading1>
        <Tooltips />
      </Flex>
      <Flex direction="column" gap="4">
        <Heading1>Popovers</Heading1>
        <Popovers />
      </Flex>
      <Flex direction="column" gap="4">
        <Heading1>Typography</Heading1>
        <Typography />
      </Flex>
    </Flex>
  );
}
