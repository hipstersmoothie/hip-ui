import { Flex } from "@/components/flex";
import {
  Body,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@/components/typography";
import { LinkProps, Link as TypographyLink } from "@/components/link";
import { Text } from "@/components/typography/text";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import { pages } from "virtual:content";
import type { MDXComponents } from "mdx/types";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";

const styles = stylex.create({
  pre: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
    padding: spacing["4"],
    borderRadius: radius["lg"],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: uiColor.border2,
  },
  h1: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
  h2: {
    marginTop: spacing["8"],
    marginBottom: spacing["4"],
  },
  h3: {
    marginTop: spacing["8"],
    marginBottom: spacing["5"],
  },
  h4: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
  h5: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
  p: {
    marginTop: {
      default: spacing["5"],
      ":is(li *)": spacing["0"],
    },
    marginBottom: {
      default: spacing["5"],
      ":is(li *)": spacing["0"],
    },
  },
});

function Link(props: LinkProps) {
  return <TypographyLink {...props} />;
}

const components: MDXComponents = {
  pre: (props) => (
    <pre {...props} {...stylex.props(styles.pre)} data-testid="code" />
  ),
  h1: (props) => <Heading1 {...props} {...stylex.props(styles.h1)} />,
  h2: (props) => <Heading2 {...props} {...stylex.props(styles.h2)} />,
  h3: (props) => <Heading3 {...props} {...stylex.props(styles.h3)} />,
  h4: (props) => <Heading4 {...props} {...stylex.props(styles.h4)} />,
  h5: (props) => <Heading5 {...props} {...stylex.props(styles.h5)} />,
  p: (props) => <Body {...props} {...stylex.props(styles.p)} />,
  a: Link,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
};

export const Route = createFileRoute("/docs/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat } = Route.useParams();
  const location = useLocation();
  const doc = allDocs.find((d) => location.pathname.includes(d._meta.path));

  if (!doc) {
    throw new Error(`Doc not found: ${_splat}`);
  }

  const Content = pages[location.pathname];

  return (
    <div>
      <Flex direction="column" gap="4">
        <Heading1>{doc?.title}</Heading1>
        <Text size="xl" variant="secondary">
          {doc?.description}
        </Text>
      </Flex>
      {Content && <Content components={components} />}
    </div>
  );
}
