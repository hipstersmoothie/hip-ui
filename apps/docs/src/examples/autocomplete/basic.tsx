"use client";

import { useFilter } from "react-aria-components";

import { AutocompleteInput } from "@/components/autocomplete";
import { ListBoxItem } from "@/components/listbox";

const options = [
  { id: "apple", handle: "Apple" },
  { id: "apricot", handle: "Apricot" },
  { id: "banana", handle: "Banana" },
  { id: "blueberry", handle: "Blueberry" },
  { id: "cherry", handle: "Cherry" },
  { id: "grape", handle: "Grape" },
  { id: "orange", handle: "Orange" },
  { id: "strawberry", handle: "Strawberry" },
];

export function Basic() {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <AutocompleteInput
      filter={contains}
      label="Fruit"
      placeholder="Type to search..."
      items={options}
      onAction={() => {}}
    >
      {(item) => <ListBoxItem id={item.id}>{item.handle}</ListBoxItem>}
    </AutocompleteInput>
  );
}
