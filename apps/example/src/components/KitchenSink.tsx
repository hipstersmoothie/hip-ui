"use client";

import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Plus } from "lucide-react";
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
        <Button size="sm">
          <Plus />
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="tertiary" size="sm">
          Tertiary
        </Button>
        <Button variant="outline" size="sm">
          Outline
        </Button>
      </Flex>
      <Flex gap="2">
        <Button>Primary</Button>
        <Button>
          <Plus />
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="outline">Outline</Button>
      </Flex>
      <Flex gap="2">
        <Button size="lg">Primary</Button>
        <Button size="lg">
          <Plus />
          Primary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="tertiary" size="lg">
          Tertiary
        </Button>
        <Button variant="outline" size="lg">
          Outline
        </Button>
      </Flex>
    </Flex>
  );
}

export function KitchenSink() {
  return (
    <Flex direction="column" gap="4">
      <Typography />
      <Buttons />
    </Flex>
  );
}
