import { Flex } from "@/components/flex";

export function FlexGap() {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="1">
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 1</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 1</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 1</div>
      </Flex>
      <Flex gap="4">
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 4</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 4</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 4</div>
      </Flex>
      <Flex gap="8">
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 8</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 8</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Gap 8</div>
      </Flex>
    </Flex>
  );
}
