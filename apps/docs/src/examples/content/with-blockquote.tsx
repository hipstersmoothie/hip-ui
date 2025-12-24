import { Content } from "@/components/content";
import { Blockquote, Body, Heading2 } from "@/components/typography";

export function WithBlockquote() {
  return (
    <Content>
      <Heading2>Blockquote Example</Heading2>
      <Body>Here's how blockquotes look within the Content component:</Body>
      <Blockquote>
        <Body>
          This is a blockquote with proper spacing and styling. The Content
          component applies consistent margins and padding to blockquotes.
        </Body>
        <Body>
          Multiple paragraphs within a blockquote maintain proper spacing
          relative to each other.
        </Body>
      </Blockquote>
      <Body>
        Content continues after the blockquote with appropriate spacing.
      </Body>
    </Content>
  );
}
