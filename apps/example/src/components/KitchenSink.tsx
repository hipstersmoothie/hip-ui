"use client";

import * as stylex from "@stylexjs/stylex";
import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Tooltip } from "../components/tooltip";
import { Clock, Plus } from "lucide-react";
import {
  Blockquote,
  Body,
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

const styles = stylex.create({
  container: {
    padding: spacing["16"],
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

function Buttons() {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="2">
        <Button size="sm">Primary</Button>
        <IconButton size="sm" label="Primary">
          <Clock />
        </IconButton>
        <Button size="sm">
          <Plus />
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <IconButton size="sm" variant="secondary" label="Secondary">
          <Clock />
        </IconButton>
        <Button variant="tertiary" size="sm">
          Tertiary
        </Button>
        <IconButton size="sm" variant="tertiary" label="Tertiary">
          <Clock />
        </IconButton>
        <Button variant="outline" size="sm">
          Outline
        </Button>
        <IconButton size="sm" variant="outline" label="Outline">
          <Clock />
        </IconButton>
      </Flex>
      <Flex gap="2">
        <Button>Primary</Button>
        <IconButton label="Primary">
          <Clock />
        </IconButton>
        <Button>
          <Plus />
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <IconButton variant="secondary" label="Secondary">
          <Clock />
        </IconButton>
        <Button variant="tertiary">Tertiary</Button>
        <IconButton variant="tertiary" label="Tertiary">
          <Clock />
        </IconButton>
        <Button variant="outline">Outline</Button>
        <IconButton variant="outline" label="Outline">
          <Clock />
        </IconButton>
      </Flex>
      <Flex gap="2">
        <Button size="lg">Primary</Button>
        <IconButton size="lg" label="Primary">
          <Clock />
        </IconButton>
        <Button size="lg">
          <Plus />
          Primary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <IconButton size="lg" variant="secondary" label="Secondary">
          <Clock />
        </IconButton>
        <Button variant="tertiary" size="lg">
          Tertiary
        </Button>
        <IconButton size="lg" variant="tertiary" label="Tertiary">
          <Clock />
        </IconButton>
        <Button variant="outline" size="lg">
          Outline
        </Button>
        <IconButton size="lg" variant="outline" label="Outline">
          <Clock />
        </IconButton>
      </Flex>
    </Flex>
  );
}

function Tooltips() {
  return (
    <Flex direction="column" gap="4" align="start">
      <Tooltip text="Tooltip" isOpen placement="bottom">
        <Button>Hover me</Button>
      </Tooltip>
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
        <Heading1>Tooltips</Heading1>
        <Tooltips />
      </Flex>
      <Flex direction="column" gap="4">
        <Heading1>Typography</Heading1>
        <Typography />
      </Flex>
      <Flex direction="column" gap="4">
        <Heading1>Buttons</Heading1>
        <Buttons />
      </Flex>
    </Flex>
  );
}
