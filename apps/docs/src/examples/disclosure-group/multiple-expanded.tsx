import * as stylex from "@stylexjs/stylex";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";
import { DisclosureGroup } from "@/components/disclosure-group";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function MultipleExpanded() {
  return (
    <DisclosureGroup
      allowsMultipleExpanded
      defaultExpandedKeys={["personal", "billing"]}
      style={styles.root}
    >
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here. Multiple disclosures can be expanded
          at the same time.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here. This disclosure is also expanded by
          default.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="preferences">
        <DisclosureTitle>Preferences</DisclosureTitle>
        <DisclosurePanel>
          Preferences form here. You can expand this while keeping the others
          open.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  );
}

