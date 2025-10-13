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
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Link } from "./link";
import { typeramp } from "./theme/typography.stylex";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { Radio, RadioGroup } from "./radio";
import { Separator } from "./separator";
import { TextArea } from "./text-area";
import { Select, SelectItem } from "./select";

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
  grow: {
    flexGrow: 1,
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
    <Flex gap="4">
      {buttonSizes.map((size) => (
        <Card key={`${size}-text-field`} style={styles.subCard}>
          <Flex direction="column" gap="6">
            <TextField
              key={`${size}-text-field`}
              label="Text Field"
              description="Input Description"
              size={size}
            />
            <Select
              label="Select"
              placeholder="Select"
              description="Select Description"
              size={size}
            >
              <SelectItem>Select 1</SelectItem>
              <SelectItem>Select 2</SelectItem>
              <SelectItem>Select 3</SelectItem>
              <SelectItem>Select 4</SelectItem>
              <SelectItem>Select 5</SelectItem>
            </Select>
            <CheckboxGroup
              label="Checkbox Group"
              description="Checkbox Group Description"
              size={size}
            >
              <Checkbox value="1">Checkbox 1</Checkbox>
              <Checkbox value="2" isDisabled>
                Checkbox 2
              </Checkbox>
              <Checkbox value="3" isIndeterminate>
                Checkbox 3
              </Checkbox>
            </CheckboxGroup>
            <RadioGroup
              label="Radio Group"
              description="Radio Group Description"
              size={size}
            >
              <Radio value="1">Radio 1</Radio>
              <Radio value="2">Radio 2</Radio>
              <Radio value="3">Radio 3</Radio>
            </RadioGroup>
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

function Radios() {
  return (
    <Flex direction="column" gap="4">
      <RadioGroup label="Radio Group" description="Radio Group Description">
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </RadioGroup>
    </Flex>
  );
}

function PaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Select a payment method</CardDescription>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="6">
          <TextField label="Name on Card" placeholder="John Doe" />
          <Flex direction="column" gap="3">
            <Flex gap="3">
              <TextField
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                style={styles.grow}
              />
              <TextField label="CVV" placeholder="123" style={styles.grow} />
            </Flex>
            <SmallBody variant="secondary">
              Enter your 16 digit number.
            </SmallBody>
          </Flex>
          <Flex gap="3">
            <Select label="Month" placeholder="MM" style={styles.grow}>
              <SelectItem>01</SelectItem>
              <SelectItem>02</SelectItem>
              <SelectItem>03</SelectItem>
              <SelectItem>04</SelectItem>
              <SelectItem>05</SelectItem>
              <SelectItem>06</SelectItem>
              <SelectItem>07</SelectItem>
              <SelectItem>08</SelectItem>
              <SelectItem>09</SelectItem>
              <SelectItem>10</SelectItem>
              <SelectItem>11</SelectItem>
              <SelectItem>12</SelectItem>
            </Select>
            <Select label="Year" placeholder="YYYY" style={styles.grow}>
              <SelectItem>2025</SelectItem>
              <SelectItem>2026</SelectItem>
              <SelectItem>2027</SelectItem>
              <SelectItem>2028</SelectItem>
              <SelectItem>2029</SelectItem>
            </Select>
          </Flex>
          <Separator />
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="3">
              <CardTitle>Billing Address</CardTitle>
              <CardDescription>
                The billing address associated with your payment method
              </CardDescription>
            </Flex>
            <Checkbox>Same as shipping address</Checkbox>
          </Flex>
          <Separator />
          <TextArea
            label="Message"
            placeholder="Add any additional comments"
            rows={4}
          />
          <Flex gap="2">
            <Button>Submit</Button>
            <Button variant="secondary">Cancel</Button>
          </Flex>
        </Flex>
      </CardBody>
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
      <SignUpForm />
      <PaymentMethod />
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
      <TitleCard title="Radios">
        <Radios />
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
