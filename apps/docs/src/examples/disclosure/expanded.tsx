import { Disclosure, DisclosurePanel, DisclosureTitle } from "@/components/disclosure";

export function Expanded() {
  return (
    <Disclosure defaultExpanded>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
        Minimum system requirements include Windows 10 or macOS 10.15 or later.
      </DisclosurePanel>
    </Disclosure>
  );
}

