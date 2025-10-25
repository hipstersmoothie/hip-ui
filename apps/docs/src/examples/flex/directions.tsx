import { Flex } from "@/components/flex";

export function FlexDirections() {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="row" gap="4">
        <div>Row</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="column" gap="4">
        <div>Column</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="row-reverse" gap="4">
        <div>Row Reverse</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="column-reverse" gap="4">
        <div>Column Reverse</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </Flex>
  );
}
