import * as stylex from "@stylexjs/stylex";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { HoverCard } from "@/components/hover-card";
import { Text } from "@/components/typography/text";

const styles = stylex.create({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
});

export function WithRichContent() {
  return (
    <HoverCard
      trigger={
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a {...stylex.props(styles.link)} href="#">
          <Flex gap="2" align="center">
            <Avatar
              fallback="JD"
              size="sm"
              src="https://github.com/shadcn.png"
            />
            <Text>John Doe</Text>
          </Flex>
        </a>
      }
    >
      <Flex direction="column" gap="4">
        <Flex gap="2">
          <Avatar fallback="JD" size="lg" src="https://github.com/shadcn.png" />
          <Flex direction="column" gap="1">
            <Text weight="semibold">John Doe</Text>
            <Text size="sm" color="secondary">
              john.doe@example.com
            </Text>
          </Flex>
        </Flex>
        <Text size="sm" variant="secondary">
          Software Engineer
        </Text>
        <Button>View Profile</Button>
      </Flex>
    </HoverCard>
  );
}
