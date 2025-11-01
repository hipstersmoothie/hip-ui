import * as stylex from "@stylexjs/stylex";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";
import { DisclosureGroup } from "@/components/disclosure-group";
import { Flex } from "@/components/flex";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Sizes() {
  return (
    <Flex direction="column" gap="4" style={styles.root}>
      <DisclosureGroup size="sm">
        <Disclosure id="sm-1">
          <DisclosureTitle>Small Size</DisclosureTitle>
          <DisclosurePanel>
            This disclosure group uses the small size. All child disclosures
            inherit this size.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="sm-2">
          <DisclosureTitle>Another Small Disclosure</DisclosureTitle>
          <DisclosurePanel>
            The size prop is passed down via SizeContext to all child
            disclosures.
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup size="md" style={styles.root}>
        <Disclosure id="md-1">
          <DisclosureTitle>Medium Size</DisclosureTitle>
          <DisclosurePanel>
            This disclosure group uses the medium size (default).
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="md-2">
          <DisclosureTitle>Another Medium Disclosure</DisclosureTitle>
          <DisclosurePanel>
            Medium is the default size if no size prop is provided.
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>

      <DisclosureGroup size="lg" style={styles.root}>
        <Disclosure id="lg-1">
          <DisclosureTitle>Large Size</DisclosureTitle>
          <DisclosurePanel>
            This disclosure group uses the large size with more padding and
            larger text.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="lg-2">
          <DisclosureTitle>Another Large Disclosure</DisclosureTitle>
          <DisclosurePanel>
            Large size provides more visual space and improved readability.
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </Flex>
  );
}
