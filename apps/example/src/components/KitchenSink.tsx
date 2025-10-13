"use client";

import * as stylex from "@stylexjs/stylex";
import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Tooltip } from "../components/tooltip";
import { ButtonGroup } from "../components/button-group";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Clock,
  Ellipsis,
  Plus,
} from "lucide-react";
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
import { Card, CardBody, CardHeader, CardTitle } from "./card";

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

function ButtonGroups() {
  return (
    <Flex direction="column" gap="4">
      {buttons.map((button) => (
        <Flex align="center" gap="2" key={button}>
          <ButtonGroup>
            <IconButton variant={button} label="Previous">
              <ArrowLeft />
            </IconButton>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant={button}>Button 1</Button>
            <Button variant={button}>Button 2</Button>
            <Button variant={button}>Button 3</Button>
            <Button variant={button}>Button 4</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant={button}>Action</Button>
            <IconButton variant={button} label="More">
              <Ellipsis />
            </IconButton>
          </ButtonGroup>
        </Flex>
      ))}

      <Flex gap="2">
        {buttons.map((button) => (
          <ButtonGroup orientation="vertical" key={`${button}-vertical`}>
            <IconButton label="Up" variant={button}>
              <ArrowUp />
            </IconButton>
            <IconButton label="Down" variant={button}>
              <ArrowDown />
            </IconButton>
          </ButtonGroup>
        ))}
      </Flex>
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
      <Popover trigger={<Button>Click me</Button>} placement="top">
        <SmallBody>Content</SmallBody>
      </Popover>
    </Flex>
  );
}

function TitleCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export function KitchenSink() {
  return (
    <Flex
      direction="column"
      gap="10"
      style={[gray.bg, gray.text, styles.container]}
    >
      <TitleCard title="Buttons">
        <Buttons />
      </TitleCard>
      <TitleCard title="Button Groups">
        <ButtonGroups />
      </TitleCard>
      <TitleCard title="Tooltips">
        <Tooltips />
      </TitleCard>
      <TitleCard title="Popovers">
        <Popovers />
      </TitleCard>
      <TitleCard title="Typography">
        <Typography />
      </TitleCard>
    </Flex>
  );
}
