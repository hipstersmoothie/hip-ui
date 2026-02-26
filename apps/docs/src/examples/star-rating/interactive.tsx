import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import { Flex } from "@/components/flex";
import { StarRatingInput } from "@/components/star-rating";
import { Text } from "@/components/typography/text";

const styles = stylex.create({
  wrapper: {
    gap: "1rem",
  },
});

export function Interactive() {
  const [controlledValue, setControlledValue] = useState(2);

  return (
    <Flex {...stylex.props(styles.wrapper)} direction="column" gap="2">
      <div {...stylex.props(styles.wrapper)}>
        <Text size="sm" variant="secondary">
          Uncontrolled (default)
        </Text>
        <StarRatingInput defaultValue={0} aria-label="Product rating" />
      </div>
      <div {...stylex.props(styles.wrapper)}>
        <Text size="sm" variant="secondary">
          Uncontrolled with initial value
        </Text>
        <StarRatingInput defaultValue={3} aria-label="Service rating" />
      </div>
      <div {...stylex.props(styles.wrapper)}>
        <Text size="sm" variant="secondary">
          Controlled (current: {controlledValue})
        </Text>
        <StarRatingInput
          value={controlledValue}
          onChange={setControlledValue}
          aria-label="Controlled rating"
        />
      </div>
    </Flex>
  );
}
