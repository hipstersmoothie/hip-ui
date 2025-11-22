import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

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
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
    </Flex>
  );
}
