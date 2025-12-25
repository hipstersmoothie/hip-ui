import { SidebarLayout } from "@/components/sidebar-layout";
import { TableOfContents, Toc } from "@/components/table-of-contents";
import { Content } from "@/components/content";
import { Heading1, Heading2, Heading3, Body } from "@/components/typography";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    maxHeight: "60vh",
    overflowY: "auto",
  },
});

// Mock table of contents data
const toc: Toc = [
  {
    id: "introduction",
    value: "Introduction",
    depth: 1,
    children: [],
  },
  {
    id: "getting-started",
    value: "Getting Started",
    depth: 1,
    children: [
      {
        id: "installation",
        value: "Installation",
        depth: 2,
        children: [],
      },
      {
        id: "configuration",
        value: "Configuration",
        depth: 2,
        children: [],
      },
    ],
  },
  {
    id: "components",
    value: "Components",
    depth: 1,
    children: [
      {
        id: "button",
        value: "Button",
        depth: 2,
        children: [],
      },
      {
        id: "card",
        value: "Card",
        depth: 2,
        children: [],
      },
    ],
  },
];

export function InconsequentialSidebar() {
  return (
    <SidebarLayout.Root style={styles.root}>
      <SidebarLayout.Page>
        <Content>
          <Heading1 id="introduction">Introduction</Heading1>
          <Body>
            This example demonstrates the InconsequentialSidebar component. The
            main navigation is on the left, and the table of contents appears on
            the right side on large screens.
          </Body>

          <Heading2 id="getting-started">Getting Started</Heading2>
          <Body>
            The InconsequentialSidebar is perfect for supplementary content like
            table of contents, related links, or metadata.
          </Body>

          <Heading3 id="installation">Installation</Heading3>
          <Body>
            Resize your browser window to see how the sidebar hides on smaller
            screens. It only appears on large screens (lg breakpoint).
          </Body>

          <Heading3 id="configuration">Configuration</Heading3>
          <Body>
            You can control when the sidebar appears using the visible prop. Set
            it to "md" for medium screens or "lg" for large screens only.
          </Body>

          <Heading2 id="components">Components</Heading2>
          <Body>
            The InconsequentialSidebar is ideal for content that enhances the
            user experience but isn't critical for core functionality.
          </Body>

          <Heading3 id="button">Button</Heading3>
          <Body>
            Unlike NavigationSidebar, this component doesn't include mobile
            drawer support. It simply hides when space is limited.
          </Body>

          <Heading3 id="card">Card</Heading3>
          <Body>
            This makes it perfect for supplementary content that can be safely
            hidden on smaller screens without impacting usability.
          </Body>
        </Content>
      </SidebarLayout.Page>
      <SidebarLayout.InconsequentialSidebar visible="md">
        <TableOfContents toc={toc} />
      </SidebarLayout.InconsequentialSidebar>
    </SidebarLayout.Root>
  );
}
