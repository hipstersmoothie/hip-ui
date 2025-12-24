import { Content } from "@/components/content";
import { Body, Heading1, Heading2, Heading3 } from "@/components/typography";

export function Basic() {
  return (
    <Content>
      <Heading1>Main Heading</Heading1>
      <Body>
        This is a paragraph with proper spacing applied by the Content wrapper.
        The Content component automatically applies consistent margins to
        headings, paragraphs, and other content elements.
      </Body>
      <Heading2>Section Heading</Heading2>
      <Body>
        Another paragraph that demonstrates the spacing between elements. The
        Content wrapper ensures consistent vertical rhythm throughout your
        content.
      </Body>
      <Heading3>Subsection</Heading3>
      <Body>
        Content spacing is automatically handled for all child elements.
      </Body>
    </Content>
  );
}
