"use client";

import * as stylex from "@stylexjs/stylex";
import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { Tooltip } from "../components/tooltip";
import { ButtonGroup } from "../components/button-group";
import { TextField } from "../components/text-field";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  Ellipsis,
  Plus,
  Search,
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
  SubLabel,
} from "./typography";
import { gray } from "./theme/semantic-color.stylex";
import { spacing } from "./theme/spacing.stylex";
import { IconButton } from "./icon-button";
import { Popover } from "./popover";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "./card";
import { Link } from "./link";
import { typeramp } from "./theme/typography.stylex";
import { Checkbox, CheckboxGroup } from "./checkbox";

const styles = stylex.create({
  subCard: {
    padding: spacing["4"],
  },
  container: {
    padding: spacing["16"],
  },
  buttonLabel: {
    width: 80,
    textTransform: "capitalize",
  },
  signUpForm: {
    width: 300,
    padding: spacing["2"],
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

function FormElements() {
  return (
    <Flex direction="column" gap="4">
      {buttonSizes.map((size) => (
        <Card key={`${size}-text-field`} style={styles.subCard}>
          <Flex gap="6">
            <TextField
              key={`${size}-text-field`}
              label="Text Field"
              description="Input Description"
              size={size}
            />
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

function SignUpForm() {
  return (
    <Card style={styles.signUpForm}>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="4">
          <TextField label="Email Address" type="email" />
          <TextField
            type="password"
            label={
              <Flex justify="between" align="center">
                <span>Password</span>
                <Link style={typeramp.sublabel}>Forgot Password?</Link>
              </Flex>
            }
          />
        </Flex>
      </CardBody>
      <CardFooter>
        <Button variant="secondary">Create Account</Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
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

function TextFields() {
  return (
    <Flex direction="column" gap="4">
      <TextField label="Text Field" />
      <TextField label="Text Field with Icon" prefix={<Search />} />
      <TextField
        label="Text Field with Suffix"
        suffix={<SmallBody variant="secondary">suffix</SmallBody>}
      />
      <TextField label="Text Field with Icon" suffix={<Check />} />
    </Flex>
  );
}

function Checkboxes() {
  return (
    <Flex direction="column" gap="4">
      <Checkbox>Accept terms and conditions</Checkbox>
      <Checkbox>
        <span>Accept terms and conditions</span>
        <SubLabel variant="secondary">
          By clicking this box, you agree to our <Link>Terms of Service</Link>{" "}
          and <Link>Privacy Policy</Link>.
        </SubLabel>
      </Checkbox>
    </Flex>
  );
}

function CheckboxGroups() {
  return (
    <Flex direction="column" gap="4">
      <CheckboxGroup
        label="Checkbox Group"
        description="Checkbox Group Description"
      >
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2" isDisabled>
          Checkbox 2
        </Checkbox>
        <Checkbox value="3" isIndeterminate>
          Checkbox 3
        </Checkbox>
      </CheckboxGroup>
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
      <SignUpForm />
      <TitleCard title="Buttons">
        <Buttons />
      </TitleCard>
      <TitleCard title="Button Groups">
        <ButtonGroups />
      </TitleCard>
      <TitleCard title="Checkboxes">
        <Checkboxes />
      </TitleCard>
      <TitleCard title="Checkbox Groups">
        <CheckboxGroups />
      </TitleCard>
      <TitleCard title="Text Fields">
        <TextFields />
      </TitleCard>
      <TitleCard title="Button Groups">
        <ButtonGroups />
      </TitleCard>
      <TitleCard title="Form Elements">
        <FormElements />
      </TitleCard>
      <TitleCard title="Tooltips">
        <Tooltip text="Tooltip">
          <Button>Hover me</Button>
        </Tooltip>
      </TitleCard>
      <TitleCard title="Popovers">
        <Popover trigger={<Button>Click me</Button>} placement="top">
          <SmallBody>Content</SmallBody>
        </Popover>
      </TitleCard>
      <TitleCard title="Typography">
        <Typography />
      </TitleCard>
    </Flex>
  );
}
