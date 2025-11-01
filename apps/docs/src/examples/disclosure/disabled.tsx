import { Disclosure, DisclosurePanel, DisclosureTitle } from "@/components/disclosure";

export function Disabled() {
  return (
    <Disclosure>
      <DisclosureTitle isDisabled>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
        Minimum system requirements include Windows 10 or macOS 10.15 or later.
      </DisclosurePanel>
    </Disclosure>
  );
}

