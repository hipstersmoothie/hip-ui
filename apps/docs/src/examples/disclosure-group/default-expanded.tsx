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

export function DefaultExpanded() {
  return (
    <DisclosureGroup defaultExpandedKeys={["personal"]} style={styles.root}>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here. This section is expanded by default.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here. Enter your payment and shipping
          information.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="preferences">
        <DisclosureTitle>Preferences</DisclosureTitle>
        <DisclosurePanel>
          Preferences form here. Customize your account settings and
          notifications.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  );
}
