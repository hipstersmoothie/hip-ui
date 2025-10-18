import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Flex } from "@/components/flex";
import { Grid, GridItem } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";
import { Menu, MenuItem, MenuSeparator } from "@/components/menu";
import { Separator } from "@/components/separator";
import { TextField } from "@/components/text-field";
import { SmallBody } from "@/components/typography";
import { createFileRoute } from "@tanstack/react-router";
import { MoreHorizontal } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  grow: {
    flexGrow: 1,
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

function RouteComponent() {
  return (
    <div>
      <YourTeam />
    </div>
  );
}
