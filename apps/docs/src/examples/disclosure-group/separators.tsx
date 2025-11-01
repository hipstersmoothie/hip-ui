import * as stylex from "@stylexjs/stylex";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";
import {
  DisclosureGroup,
  DisclosureGroupSeparator,
} from "@/components/disclosure-group";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  root: {
    gap: spacing["2"],
    width: "100%",
  },
});

export function Separators() {
  return (
    <DisclosureGroup style={styles.root}>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here. This includes your name, email, and
          contact details.
        </DisclosurePanel>
      </Disclosure>
      <DisclosureGroupSeparator />
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here. Enter your payment and shipping
          information.
        </DisclosurePanel>
      </Disclosure>
      <DisclosureGroupSeparator />
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
