import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUp,
  CheckCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  MoreHorizontal,
  Pin,
  Plus,
  Share,
  X,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import { Flex } from "@/components/flex";
import { Grid, GridItem } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { Menu, MenuItem, MenuSeparator } from "@/components/menu";
import { Separator } from "@/components/separator";
import { Switch } from "@/components/switch";
import { TextField } from "@/components/text-field";
import { ToggleButton } from "@/components/toggle-button";
import { Body, Heading5, SmallBody } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { radius } from "../components/theme/radius.stylex";
import {
  ui,
  primary,
  successColor,
  primaryColor,
} from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { fontFamily, typeramp } from "../components/theme/typography.stylex";

const styles = stylex.create({
  relative: {
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  grow: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 0,
    minWidth: 0,
  },
  skinny: {
    flexBasis: "0%",
    flexGrow: 0.75,
    flexShrink: 0,
  },
  pinnedButtons: {
    marginRight: spacing["4"],
    marginTop: spacing["4"],
    position: "absolute",
    right: 0,
    top: 0,
  },
  invoiceCard: {
    padding: spacing["6"],
  },
  check: {
    color: successColor.solid2,
  },
  creditCardWrapper: {
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    cornerShape: "squircle",
    padding: spacing["8"],
  },
  creditCard: {
    backgroundImage: `linear-gradient(135deg, ${primaryColor.solid2} 0%, ${primaryColor.text1} 100%)`,
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    cornerShape: "squircle",
    fontFamily: fontFamily["mono"],
    height: spacing["40"],
    padding: spacing["4"],
  },
  copyCardNumber: {
    backgroundColor: {
      default: "transparent",
      ":hover": "rgba(255, 255, 255, 0.3)",
    },
    color: "white",
  },
});

export const Route = createFileRoute("/_docs/invoice-app")({
  component: RouteComponent,
});

function YourTeam() {
  const members = [
    {
      name: "Oliver Chen",
      email: "oliver.chen@example.com",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
    },
    {
      name: "Amelia Rodriguez",
      email: "amelia.r@example.com",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
    },
    {
      name: "Theodore Kim",
      email: "theo.kim@example.com",
      avatar:
        "https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop",
    },
    {
      name: "Sofia Patel",
      email: "sofia.patel@example.com",
      avatar:
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop",
    },
    {
      name: "Mateo Garcia",
      email: "m.garcia@example.com",
      avatar:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.35&fp-z=2&fit=crop",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Team</CardTitle>
        <CardDescription>Invite and manage your team members.</CardDescription>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="8">
          <Flex align="center" gap="2">
            <TextField
              aria-label="Email"
              placeholder="you@example.com"
              style={styles.grow}
            />
            <Button>Invite</Button>
          </Flex>

          <Grid
            columns="auto max-content 1fr auto"
            columnGap="4"
            rowGap="5"
            alignItems="center"
          >
            {members.map((member, index) => (
              <Fragment key={member.email}>
                <Avatar
                  size="lg"
                  src={member.avatar}
                  fallback={member.name.charAt(0)}
                />
                <Link href={`mailto:${member.email}`}>{member.name}</Link>
                <SmallBody variant="secondary">{member.email}</SmallBody>
                <Menu
                  trigger={
                    <IconButton label="More" variant="tertiary">
                      <MoreHorizontal />
                    </IconButton>
                  }
                >
                  <MenuItem>View profile</MenuItem>
                  <MenuItem>Change role</MenuItem>
                  <MenuSeparator />
                  <MenuItem variant="destructive">Remove</MenuItem>
                </Menu>
                {index < members.length - 1 && (
                  <GridItem columnStart={1} columnEnd={-1}>
                    <Separator />
                  </GridItem>
                )}
              </Fragment>
            ))}
          </Grid>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Pricing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing</CardTitle>
        <CardDescription>
          No credit card required. Every plan includes a 30-day trial of all Pro
          features.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <Flex gap="8">
          <Flex direction="column" gap="5" style={styles.grow}>
            <Flex direction="column" gap="2">
              <Text weight="semibold" size="xl">
                Basic
              </Text>
              <Text size="sm" variant="secondary">
                3 team members
              </Text>
            </Flex>
            <Text weight="semibold" size="xl">
              $0<Text variant="secondary">{" / mo"}</Text>
            </Text>
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Expense tracking</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Invoicing</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Payment tracking</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Transaction recording</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Basic reports</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Email support</Text>
              </Flex>
            </Flex>
            <Button variant="outline">Downgrade</Button>
          </Flex>
          <Flex direction="column" gap="5" style={styles.grow}>
            <Flex direction="column" gap="2">
              <Text weight="semibold" size="xl">
                Growth
              </Text>
              <Text size="sm" variant="secondary">
                10 team members
              </Text>
            </Flex>
            <Text weight="semibold" size="xl">
              $49<Text variant="secondary">{" / mo"}</Text>
            </Text>
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Online payments</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Recurring invoices</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Bill management</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Inventory tracking</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Detailed reports</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Phone support</Text>
              </Flex>
            </Flex>
            <Button variant="outline">Go to billing</Button>
          </Flex>
          <Flex direction="column" gap="5" style={styles.grow}>
            <Flex direction="column" gap="2">
              <Text weight="semibold" size="xl">
                Pro
              </Text>
              <Text size="sm" variant="secondary">
                Unlimited team members
              </Text>
            </Flex>
            <Text weight="semibold" size="xl">
              $99<Text variant="secondary">{" / mo"}</Text>
            </Text>
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Custom invoices</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Multi-business</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Team collaboration</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">App integrations</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Advanced security</Text>
              </Flex>
              <Flex align="center" gap="2">
                <CheckCircle {...stylex.props(styles.check)} size={16} />
                <Text size="sm">Priority support</Text>
              </Flex>
            </Flex>
            <Button>Upgrade</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Notifications() {
  const sections = [
    {
      title: "Comments",
      description:
        "Receive notifications when someone comments on your documents or mentions you.",
    },
    {
      title: "Favorites",
      description:
        "Receive notifications when there is activity related to your favorited items.",
    },
    {
      title: "New documents",
      description:
        "Receive notifications whenever people on your team create new documents.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification settings.</CardDescription>
      </CardHeader>
      <CardBody>
        <Grid columns="1fr auto" rowGap="6" alignItems="start">
          {sections.map((section, index) => (
            <Fragment key={section.title}>
              <Flex direction="column" gap="1">
                <Heading5>{section.title}</Heading5>
                <SmallBody variant="secondary">{section.description}</SmallBody>
              </Flex>
              <Flex direction="column" gap="2">
                <Switch>Push</Switch>
                <Switch>Email</Switch>
                <Switch isDisabled>Slack</Switch>
              </Flex>
              {index < sections.length - 1 && (
                <GridItem columnStart={1} columnEnd={-1}>
                  <Separator />
                </GridItem>
              )}
            </Fragment>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}

function RecentActivity() {
  const activities = [
    {
      name: "Oliver Chen",
      timestamp: "06-08-2025 10:00 AM",
      description: (
        <>
          Approved invoice <Link href="#">#3461</Link>{" "}
        </>
      ),
      avatar:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.45&amp;fp-y=0.37&amp;fp-z=3.5&amp;fit=crop",
    },
    {
      name: "Amelia Rodriguez",
      timestamp: "06-08-2025 10:00 AM",
      description: (
        <>
          Purchased <Link href="#">15 office chairs</Link>{" "}
        </>
      ),
      avatar:
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.4&amp;fp-y=0.35&amp;fp-z=1.05&amp;fit=crop",
    },
    {
      name: "Theodore Kim",
      timestamp: "06-08-2025 10:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.4&amp;fp-y=0.35&amp;fp-z=1.05&amp;fit=crop",
      description: (
        <>
          Responded to your commente <Link href="#">#7514</Link>{" "}
        </>
      ),
    },
    {
      name: "Jasper Eriksson",
      timestamp: "06-08-2025 10:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1586822339087-80cc375ac083?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.6&amp;fp-z=1&amp;fit=crop",
      description: (
        <>
          Created <Link href="#">4 invoices</Link>{" "}
        </>
      ),
    },
    {
      name: "Travis Ross",
      timestamp: "06-08-2025 10:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.52&amp;fp-y=0.47&amp;fp-z=1.3&amp;fit=crop",
      description: (
        <>
          Updated client details for <Link href="#">Acme Co.</Link>{" "}
        </>
      ),
    },
    {
      name: "Gizela Kavková",
      timestamp: "06-08-2025 10:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1525304937537-4d586f394674?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=faces&amp;fit=crop",
      description: (
        <>
          Created <Link href="#">4 invoices</Link>{" "}
        </>
      ),
    },
    {
      name: "Gizela Kavková",
      timestamp: "06-08-2025 8:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1525304937537-4d586f394674?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=faces&amp;fit=crop",
      description: (
        <>
          Deleted report <Link href="#">#1234</Link>{" "}
        </>
      ),
    },
    {
      name: "Da-Xia Wu",
      timestamp: "06-08-2025 8:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?&amp;w=64&amp;h=64&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.3&amp;fp-z=1.5&amp;fit=crop",
      description: <>Joined the team</>,
    },
  ];

  return (
    <Card style={styles.relative}>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>
          Review what has happened over the past days.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <Grid
          columns="auto 1fr auto"
          columnGap="4"
          rowGap="5"
          alignItems="center"
        >
          {activities.map((activity, index) => (
            <Fragment key={activity.timestamp}>
              <Avatar
                size="lg"
                src={activity.avatar}
                fallback={activity.name.charAt(0)}
              />
              <Flex direction="column" gap="2">
                <Text weight="medium">{activity.name}</Text>
                <SmallBody variant="secondary">
                  {activity.description}
                </SmallBody>
              </Flex>
              <SmallBody variant="secondary">
                {Intl.DateTimeFormat("en-US", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(new Date(activity.timestamp))}
              </SmallBody>
              {index < activities.length - 1 && (
                <GridItem columnStart={1} columnEnd={-1}>
                  <Separator />
                </GridItem>
              )}
            </Fragment>
          ))}
        </Grid>
        <Flex gap="1" style={styles.pinnedButtons}>
          <IconButton variant="tertiary" label="Open in new tab">
            <ExternalLink />
          </IconButton>
          <ToggleButton defaultSelected variant="tertiary">
            <Pin />
          </ToggleButton>
        </Flex>
      </CardBody>
    </Card>
  );
}

function FinancialPerformance() {
  const data = [
    {
      label: "MRR",
      change: "3.2%",
      value: "$350K",
      trend: "positive",
      direction: "up",
    },
    {
      label: "OpEx",
      change: "12.8%",
      value: "$211K",
      trend: "negative",
      direction: "up",
    },
    {
      label: "CapEx",
      change: "8.8%",
      value: "$94K",
      trend: "positive",
      direction: "down",
    },
    {
      label: "GPM",
      change: "1.2%",
      value: "44.6%",
      trend: "negative",
      direction: "down",
    },
    {
      label: "NPM",
      change: "0.0%",
      value: "9.1%",
      trend: "neutral",
      direction: "none",
    },
    {
      label: "EBITDA",
      change: "4.1%",
      value: "$443K",
      trend: "positive",
      direction: "up",
    },
    {
      label: "CAC",
      change: "11.0%",
      value: "$146",
      trend: "positive",
      direction: "down",
    },
    {
      label: "LTV",
      change: "3%",
      value: "$1,849",
      trend: "positive",
      direction: "up",
    },
    {
      label: "Churn",
      change: "1.1%",
      value: "12.4%",
      trend: "negative",
      direction: "up",
    },
  ];

  return (
    <Card style={styles.relative}>
      <CardHeader>
        <CardTitle>Financial performance</CardTitle>
        <CardDescription>
          Review your company's KPIs compared to the month before. .
        </CardDescription>
      </CardHeader>
      <CardBody>
        <Grid
          columns="1fr 1fr 1fr"
          columnGap="10"
          rowGap="10"
          alignItems="center"
        >
          {data.map((item) => (
            <Flex
              key={`${item.label}-${item.change}`}
              direction="column"
              gap="4"
            >
              <Flex gap="2" align="center">
                <Text variant="secondary">{item.label}</Text>
                <Badge
                  size="sm"
                  variant={
                    item.trend === "positive"
                      ? "success"
                      : item.trend === "negative"
                        ? "critical"
                        : "default"
                  }
                >
                  {item.direction === "up" && <ArrowUp />}
                  {item.direction === "down" && <ArrowDown />}
                  {item.change}
                </Badge>
              </Flex>
              <Text size="3xl" weight="semibold">
                {item.value}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Flex gap="1" style={styles.pinnedButtons}>
          <IconButton variant="tertiary" label="Open in new tab">
            <ExternalLink />
          </IconButton>
          <ToggleButton defaultSelected variant="tertiary">
            <Pin />
          </ToggleButton>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Todos() {
  const todos = [
    {
      id: "1",
      title: (
        <span>
          Respond to comment <Link>#384</Link> from Travis Ross
        </span>
      ),
      completed: false,
    },
    {
      id: "2",
      title: <span>Invite Acme Co. team to Slack</span>,
      completed: false,
    },
    {
      id: "3",
      title: <span>Create a report requested by Danilo Sousa</span>,
      completed: false,
    },
    {
      id: "4",
      title: (
        <span>
          Review support request <Link>#85</Link>
        </span>
      ),
      completed: false,
    },
    { id: "5", title: <span>Close Q2 finances</span>, completed: true },
    {
      id: "6",
      title: (
        <span>
          Review invoice <Link>#3456</Link>
        </span>
      ),
      completed: true,
    },
  ];

  return (
    <Card style={styles.relative}>
      <CardHeader>
        <CardTitle>To-do</CardTitle>
        <CardDescription>Stay on top of your daily tasks.</CardDescription>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="4">
          {todos.map((todo) => (
            <Checkbox isSelected={todo.completed} key={todo.id}>
              <Text strikethrough={todo.completed}>{todo.title}</Text>
            </Checkbox>
          ))}
        </Flex>
        <Flex gap="1" style={styles.pinnedButtons}>
          <IconButton variant="tertiary" label="Share tasks">
            <Share />
          </IconButton>
          <IconButton variant="tertiary" label="Add new task">
            <Plus />
          </IconButton>
        </Flex>
      </CardBody>
    </Card>
  );
}

function SignUpForm() {
  return (
    <Card>
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

function SampleInvoice() {
  return (
    <Card style={styles.relative}>
      <CardHeader>
        <CardTitle>
          Invoice <Link>#3461</Link>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Flex direction="column" gap="8">
          <Grid columns="1fr 1fr" columnGap="6">
            <Flex direction="column" gap="2">
              <Text size="sm" variant="secondary">
                Issued
              </Text>
              <Text weight="medium">June 21, 2023</Text>
            </Flex>
            <Flex direction="column" gap="2">
              <Text size="sm" variant="secondary">
                Due
              </Text>
              <Text weight="medium">July 21, 2023</Text>
            </Flex>
            <Flex direction="column" gap="2">
              <Text size="sm" variant="secondary">
                To
              </Text>
              <Text weight="medium">Paradise Ventures</Text>
              <Text size="sm">
                742 Evergreen Terrace, Springfield, IL 62704
              </Text>
            </Flex>
            <Flex direction="column" gap="2">
              <Text size="sm" variant="secondary">
                From
              </Text>
              <Text weight="medium">Rogue Widgets</Text>
              <Text size="sm">1600 Baker Street NW, Washington, DC 20500</Text>
            </Flex>
          </Grid>

          <Flex direction="column" gap="4">
            <Flex justify="between" align="center">
              <Text size="sm" variant="secondary">
                Services
              </Text>
              <Text size="sm" variant="secondary">
                Price
              </Text>
            </Flex>
            <Flex justify="between" align="center">
              <Text weight="medium" size="lg">
                Branding
              </Text>
              <Text>$20,000</Text>
            </Flex>
            <Flex justify="between" align="center">
              <Text weight="medium" size="lg">
                Marketing website
              </Text>
              <Text>$17,500</Text>
            </Flex>
            <Separator />
            <Flex justify="between" align="center">
              <Text>Total</Text>
              <Text>$37,500</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap="1" style={styles.pinnedButtons}>
          <IconButton variant="tertiary" label="Close">
            <X />
          </IconButton>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button variant="critical-outline">Reject</Button>
        <Button>Approve</Button>
      </CardFooter>
    </Card>
  );
}

function InvoicePaid() {
  return (
    <Card style={[styles.relative, styles.invoiceCard]}>
      <Flex direction="column" gap="6" style={styles.textCenter}>
        <Flex align="center" justify="center">
          <CheckCircle2 size={48} {...stylex.props(styles.check)} />
        </Flex>
        <Text size="xl" weight="medium">
          Invoice paid
        </Text>
        <Body>
          You paid $17,975.30. A receipt copy was sent to{" "}
          <Text weight="semibold">accounting@example.com</Text>
        </Body>
        <Flex direction="column" gap="2">
          <Button>Next invoice</Button>
          <Button variant="outline">Done</Button>
        </Flex>
      </Flex>
      <Flex gap="1" style={styles.pinnedButtons}>
        <IconButton variant="tertiary" label="Close">
          <X />
        </IconButton>
      </Flex>
    </Card>
  );
}

function YourCompanyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Company Card</CardTitle>
        <CardDescription>View and manage your corporate card.</CardDescription>
      </CardHeader>
      <CardBody>
        <div
          {...stylex.props(
            styles.creditCardWrapper,
            ui.bgDim,
            primary.textContrast,
          )}
        >
          <Flex
            direction="column"
            justify="between"
            gap="2"
            style={styles.creditCard}
          >
            <Text>Shane Goodall</Text>
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                <Text>1234 5678 9012 3456</Text>
                <IconButton
                  size="sm"
                  variant="tertiary"
                  label="Copy card number"
                  style={styles.copyCardNumber}
                >
                  <Copy />
                </IconButton>
              </Flex>
              <Flex align="center" gap="2">
                <Text>01/27</Text>
                <Text>999</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="critical-outline">Freeze</Button>
        <Button>Done</Button>
      </CardFooter>
    </Card>
  );
}

function RouteComponent() {
  return (
    <Flex gap="6">
      <Flex direction="column" gap="6" style={styles.grow}>
        <YourTeam />
        <Notifications />
        <Pricing />
      </Flex>
      <Flex direction="column" gap="6" style={styles.skinny}>
        <SignUpForm />
        <YourCompanyCard />
        <InvoicePaid />
        <SampleInvoice />
      </Flex>
      <Flex direction="column" gap="6" style={styles.grow}>
        <FinancialPerformance />
        <RecentActivity />
        <Todos />
      </Flex>
    </Flex>
  );
}
