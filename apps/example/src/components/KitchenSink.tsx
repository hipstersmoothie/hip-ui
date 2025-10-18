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
  AxeIcon,
  Check,
  Copy,
  CpuIcon,
  Ellipsis,
  File,
  Folder,
  GlobeIcon,
  Image,
  Info,
  Pin,
  Plus,
  Scissors,
  Search,
  Star,
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
import { ToggleButton } from "./toggle-button";
import { ToggleButtonGroup } from "./toggle-button-group";
import {
  CommandMenu,
  CommandMenuItem,
  CommandMenuSection,
  CommandMenuSectionHeader,
  CommandMenuSeparator,
} from "./command-menu";
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSectionHeader,
  MenuSeparator,
  SubMenu,
} from "./menu";
import { ContextMenu } from "./context-menu";
import { slate } from "./theme/colors.stylex";
import { radius } from "./theme/radius.stylex";
import { TimeField } from "./time-field";
import { DateField } from "./date-field";
import { SearchField } from "./search-field";
import { ColorField } from "./color-field";
import { NumberField } from "./number-field";
import { ComboBox, ComboBoxItem } from "./combobox";
import { Tree, TreeItem } from "./tree";
import { DialogTrigger } from "react-aria-components";
import {
  AlertDialog,
  AlertDialogFooter,
} from "hip-ui/components/alert-dialog/index";
import {
  AlertDialogActionButton,
  AlertDialogCancelButton,
  AlertDialogDescription,
  AlertDialogHeader,
} from "./alert-dialog";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "hip-ui/components/dialog/index";
import { Avatar } from "hip-ui/components/avatar/index";
import { Badge } from "hip-ui/components/badge/index";

const styles = stylex.create({
  capitalize: {
    textTransform: "capitalize",
  },
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
  contextMenuArea: {
    width: "100px",
    height: "100px",
    backgroundColor: slate.component1,
    padding: spacing["4"],
    borderRadius: radius["md"],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: slate.border2,
  },
  tree: {
    height: "300px",
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

const buttons = [
  "primary",
  "secondary",
  "tertiary",
  "outline",
  "critical",
] as const;
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
      {buttons.map(
        (button) =>
          button !== "critical" && (
            <Flex align="center" gap="2" key={button}>
              <ButtonGroup>
                <IconButton variant={button} label="Previous">
                  <ArrowLeft />
                </IconButton>
              </ButtonGroup>
              <ButtonGroup>
                <ToggleButton variant={button}>
                  <Star />
                </ToggleButton>
                <Button variant={button}>Button 1</Button>
                <Button variant={button}>Button 2</Button>
                <Button variant={button}>Button 3</Button>
                <Button variant={button}>Button 4</Button>
                <ToggleButtonGroup>
                  <ToggleButton variant={button}>Toggle Button 1</ToggleButton>
                  <ToggleButton variant={button}>Toggle Button 2</ToggleButton>
                  <ToggleButton variant={button}>Toggle Button 3</ToggleButton>
                </ToggleButtonGroup>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant={button}>Action</Button>
                <IconButton variant={button} label="More">
                  <Ellipsis />
                </IconButton>
              </ButtonGroup>
            </Flex>
          ),
      )}

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
      <TextField label="Text Field with Icon" prefix={<CpuIcon />} />
      <TextField
        label="Text Field with Suffix"
        suffix={<SmallBody variant="secondary">suffix</SmallBody>}
      />
      <TextField label="Text Field with Icon" suffix={<Check />} />
      <SearchField label="Search Field" />
      <ColorField label="Color Field" />
      <NumberField
        label="Number Field"
        minValue={0}
        prefix={<CpuIcon />}
        defaultValue={1}
      />
      <TimeField label="Time Field" />
      <DateField label="Date Field" />
      <ComboBox label="ComboBox" placeholder="Select an option">
        <ComboBoxItem>ComboBox Item 1</ComboBoxItem>
        <ComboBoxItem prefix={<GlobeIcon />} suffix={<div>new</div>}>
          ComboBox Item 2
        </ComboBoxItem>
        <ComboBoxItem isDisabled>ComboBox Item 2</ComboBoxItem>
        <ComboBoxItem>ComboBox Item 3</ComboBoxItem>
        <ComboBoxItem prefix={<Plus />}>
          ComboBox Item 4
          <SubLabel variant="secondary">
            This is a description for ComboBox Item 4
          </SubLabel>
        </ComboBoxItem>
      </ComboBox>
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

function ToggleButtonGroups() {
  return (
    <Flex direction="column" gap="4">
      {buttons.map(
        (button) =>
          button !== "critical" && (
            <Flex key={button} gap="8">
              {buttonSizes.map((size) => (
                <ToggleButtonGroup
                  key={`${button}-${size}`}
                  selectionMode="single"
                >
                  <ToggleButton
                    variant={button}
                    size={size}
                    id={`${button}-${size}-1`}
                  >
                    Toggle Button 1
                  </ToggleButton>
                  <ToggleButton
                    variant={button}
                    size={size}
                    id={`${button}-${size}-2`}
                  >
                    Toggle Button 2
                  </ToggleButton>
                  <ToggleButton
                    variant={button}
                    size={size}
                    id={`${button}-${size}-3`}
                  >
                    Toggle Button 3
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
            </Flex>
          ),
      )}
    </Flex>
  );
}

function MenuExample() {
  return (
    <Flex gap="2">
      <Menu trigger={<Button>Click me</Button>}>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </Menu>
      <Menu
        trigger={
          <IconButton label="More">
            <Ellipsis />
          </IconButton>
        }
      >
        <MenuSection>
          <MenuSectionHeader>Menu Section Header</MenuSectionHeader>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem isDisabled>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuSectionHeader>Menu Section 2</MenuSectionHeader>
          <MenuItem>Menu Item 4</MenuItem>
          <MenuItem>Menu Item 5</MenuItem>
          <SubMenu trigger={<MenuItem>Menu Item 6</MenuItem>}>
            <MenuItem>Menu Item 7</MenuItem>
            <MenuItem>Menu Item 8</MenuItem>
            <MenuItem>Menu Item 9</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>

      <ContextMenu
        trigger={
          <Flex
            style={styles.contextMenuArea}
            align="center"
            justify="center"
            {...stylex.props(
              typeramp.label,
              styles.contextMenuArea,
              gray.borderInteractive,
            )}
          >
            Right Click me
          </Flex>
        }
      >
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </ContextMenu>
    </Flex>
  );
}

function TreeExample() {
  return (
    <>
      <Tree
        aria-label="Files"
        selectionMode="multiple"
        selectionBehavior="replace"
        defaultExpandedKeys={["documents", "photos", "project"]}
      >
        <TreeItem id="documents" title="Documents" prefix={<Folder />}>
          <TreeItem id="project" title="Project" prefix={<Folder />}>
            <TreeItem id="report" title="Weekly Report" prefix={<File />} />
          </TreeItem>
        </TreeItem>
        <TreeItem id="photos" title="Photos" prefix={<Folder />}>
          <TreeItem id="one" title="Image 1" prefix={<Image />} />
          <TreeItem id="two" title="Image 2" isDisabled prefix={<Image />} />
        </TreeItem>
        <TreeItem
          id="three"
          title="Image 3"
          prefix={<Image />}
          suffix={
            <Menu
              placement="right top"
              trigger={
                <IconButton size="sm" variant="tertiary" label="More">
                  <Ellipsis />
                </IconButton>
              }
            >
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </Menu>
          }
        />
      </Tree>
    </>
  );
}

function CommandMenuExample() {
  return (
    <Flex direction="column" gap="4">
      <CommandMenu>
        <CommandMenuItem prefix={<AxeIcon />}>New</CommandMenuItem>
        <CommandMenuSection>
          <CommandMenuSectionHeader>Edit</CommandMenuSectionHeader>
          <CommandMenuItem
            prefix={<Copy />}
            onAction={() => console.log("Copy")}
          >
            Copy
          </CommandMenuItem>
          <CommandMenuItem prefix={<Plus />}>Paste</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
          <CommandMenuItem prefix={<Scissors />}>Cut</CommandMenuItem>
        </CommandMenuSection>
      </CommandMenu>
    </Flex>
  );
}

function AlertDialogExample() {
  return (
    <Flex direction="column" gap="4">
      <AlertDialog trigger={<Button>Noraml Alert Dialog</Button>}>
        <AlertDialogHeader>Unauthenticated</AlertDialogHeader>
        <AlertDialogDescription>
          Please log in to continue.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogActionButton>Log In</AlertDialogActionButton>
        </AlertDialogFooter>
      </AlertDialog>
      <AlertDialog trigger={<Button>Critical Alert Dialog</Button>}>
        <AlertDialogHeader>Critical Alert Dialog</AlertDialogHeader>
        <AlertDialogDescription>
          This action is critical and cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancelButton />
          <AlertDialogActionButton variant="critical">
            Delete
          </AlertDialogActionButton>
        </AlertDialogFooter>
      </AlertDialog>
    </Flex>
  );
}

function DialogExample() {
  return (
    <Flex direction="column" gap="4">
      <Dialog trigger={<Button>Click me</Button>}>
        <DialogHeader>Billing Information</DialogHeader>
        <DialogDescription>
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
          </Flex>
        </DialogDescription>
        <DialogFooter>
          <Button slot="close">Cancel</Button>
          <Button>Action</Button>
        </DialogFooter>
      </Dialog>
    </Flex>
  );
}

function AvatarExample() {
  return (
    <Flex direction="column" gap="4">
      {[...buttonSizes, "xl" as const].map((size) => (
        <Avatar
          key={size}
          size={size}
          src="https://github.com/shadcn.png"
          fallback="JD"
        />
      ))}
    </Flex>
  );
}

const bageVariants = [
  "primary",
  "default",
  "warning",
  "critical",
  "success",
] as const;

function BadgeExample() {
  return (
    <Flex gap="4">
      {bageVariants.map((variant) => (
        <Flex gap="4" direction="column" style={styles.capitalize}>
          <Badge variant={variant}>{variant}</Badge>
          <Badge variant={variant} size="md">
            {variant}
          </Badge>
          <Badge variant={variant}>
            <Info />
            {variant}
          </Badge>
          <Badge variant={variant} size="sm">
            <Info />
            {variant}
          </Badge>
        </Flex>
      ))}
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
      <TitleCard title="Badges">
        <BadgeExample />
      </TitleCard>
      <TitleCard title="Avatars">
        <AvatarExample />
      </TitleCard>
      <TitleCard title="Dialog">
        <DialogExample />
      </TitleCard>
      <TitleCard title="Alert Dialog">
        <AlertDialogExample />
      </TitleCard>
      <CommandMenuExample />
      <TitleCard title="Tree">
        <TreeExample />
      </TitleCard>
      <SignUpForm />
      <PaymentMethod />
      <TitleCard title="Buttons">
        <Buttons />
      </TitleCard>
      <TitleCard title="Button Groups">
        <ButtonGroups />
      </TitleCard>
      <TitleCard title="Toggle Buttons">
        <Flex direction="column" gap="4">
          {buttons.map((button) => (
            <Flex gap="8">
              {buttonSizes.map(
                (size) =>
                  button !== "critical" && (
                    <Flex key={`${button}-${size}`} gap="2">
                      <ToggleButton variant={button} size={size}>
                        <Pin />
                      </ToggleButton>
                      <ToggleButton variant={button} size={size}>
                        Pin
                      </ToggleButton>
                      <ToggleButton variant={button} size={size}>
                        <Pin />
                        Pin
                      </ToggleButton>
                    </Flex>
                  ),
              )}
            </Flex>
          ))}
        </Flex>
      </TitleCard>
      <TitleCard title="Toggle Button Groups">
        <ToggleButtonGroups />
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
      <TitleCard title="Menus">
        <MenuExample />
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
