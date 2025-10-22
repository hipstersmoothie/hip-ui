import { Flex } from "@/components/flex";

export function FlexDirections() {
  return (
    <div>
      <Flex direction="row" gap="4" style={{ marginBottom: "1rem" }}>
        <div>Row</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="column" gap="4" style={{ marginBottom: "1rem" }}>
        <div>Column</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="row-reverse" gap="4" style={{ marginBottom: "1rem" }}>
        <div>Row Reverse</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex direction="column-reverse" gap="4">
        <div>Column Reverse</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </div>
  );
}
