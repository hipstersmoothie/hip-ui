import { Flex } from "@/components/flex";

export function FlexAlignment() {
  return (
    <div>
      <Flex
        justify="start"
        gap="4"
        style={{
          marginBottom: "1rem",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <div>Start</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex
        justify="center"
        gap="4"
        style={{
          marginBottom: "1rem",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <div>Center</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex
        justify="end"
        gap="4"
        style={{
          marginBottom: "1rem",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <div>End</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex
        justify="between"
        gap="4"
        style={{
          marginBottom: "1rem",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <div>Between</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </div>
  );
}
