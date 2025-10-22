import { Select } from "@/components/select";
import { Flex } from "@/components/flex";

const countries = [
  { id: "us", name: "United States", code: "US" },
  { id: "ca", name: "Canada", code: "CA" },
  { id: "uk", name: "United Kingdom", code: "UK" },
  { id: "de", name: "Germany", code: "DE" },
  { id: "fr", name: "France", code: "FR" },
];

export function SelectWithDescription() {
  return (
    <Flex direction="column" gap="4">
      <Select 
        label="Country"
        placeholder="Select your country"
        description="Choose the country where you live"
        items={countries}
      >
        {(item) => (
          <div>
            <div>{item.name}</div>
            <div style={{ fontSize: "0.875rem", color: "#666" }}>
              {item.code}
            </div>
          </div>
        )}
      </Select>
    </Flex>
  );
}
