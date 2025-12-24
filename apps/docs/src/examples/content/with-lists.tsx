import { Content } from "@/components/content";
import {
  Body,
  Heading2,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@/components/typography";

export function WithLists() {
  return (
    <Content>
      <Heading2>List Examples</Heading2>
      <Body>Here are some examples of lists within the Content component:</Body>
      <UnorderedList>
        <ListItem>First item in an unordered list</ListItem>
        <ListItem>Second item with proper spacing</ListItem>
        <ListItem>Third item maintains consistent margins</ListItem>
      </UnorderedList>
      <Body>And an ordered list:</Body>
      <OrderedList>
        <ListItem>First step</ListItem>
        <ListItem>Second step</ListItem>
        <ListItem>Third step</ListItem>
      </OrderedList>
      <Body>
        Paragraphs within lists have adjusted spacing to maintain proper
        hierarchy.
      </Body>
    </Content>
  );
}
