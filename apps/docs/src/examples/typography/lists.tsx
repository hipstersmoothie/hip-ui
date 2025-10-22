import {
  UnorderedList,
  OrderedList,
  ListItem,
  Blockquote,
  InlineCode,
} from "@/components/typography";

export function Lists() {
  return (
    <div>
      <UnorderedList>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </UnorderedList>

      <OrderedList>
        <ListItem>First step</ListItem>
        <ListItem>Second step</ListItem>
        <ListItem>Third step</ListItem>
      </OrderedList>

      <Blockquote>This is a blockquote example.</Blockquote>

      <p>
        This text contains <InlineCode>inline code</InlineCode>.
      </p>
    </div>
  );
}
