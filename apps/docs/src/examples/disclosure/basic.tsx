import * as stylex from "@stylexjs/stylex";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Basic() {
  return (
    <Disclosure style={styles.root}>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here. Minimum system requirements
        include Windows 10 or macOS 10.15 or later.
      </DisclosurePanel>
    </Disclosure>
  );
}
