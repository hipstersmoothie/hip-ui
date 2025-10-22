import { Flex } from "@/components/flex";

export function FlexWrap() {
  return (
    <div>
      <Flex
        wrap
        gap="4"
        style={{ width: "300px", border: "1px solid #ccc", padding: "1rem" }}
      >
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Item 1</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Item 2</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Item 3</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Item 4</div>
        <div style={{ padding: "0.5rem", background: "#f0f0f0" }}>Item 5</div>
      </Flex>
    </div>
  );
}
