import * as stylex from "@stylexjs/stylex";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";
import { Flex } from "@/components/flex";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Sizes() {
  return (
    <Flex direction="column" gap="4" style={styles.root}>
      <Disclosure size="sm">
        <DisclosureTitle>Small Disclosure</DisclosureTitle>
        <DisclosurePanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure size="md">
        <DisclosureTitle>Medium Disclosure</DisclosureTitle>
        <DisclosurePanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure size="lg">
        <DisclosureTitle>Large Disclosure</DisclosureTitle>
        <DisclosurePanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </DisclosurePanel>
      </Disclosure>
    </Flex>
  );
}
