import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
import { shadow } from "@/components/theme/shadow.stylex";
import { Text } from "@/components/typography/text";

import { radius } from "../../components/theme/radius.stylex";
import { uiColor } from "../../components/theme/semantic-color.stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    marginBottom: spacing["12"],
    marginTop: spacing["12"],
  },
  box: {
    borderColor: uiColor.border3,
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    height: spacing["32"],
    width: spacing["32"],
  },
  shadow: (value: string) => ({
    boxShadow: value,
  }),
});

const sortedShadow = Object.entries(shadow).filter(
  ([key]) => !key.startsWith("__"),
) as [string, string][];

export function Shadow() {
  return (
    <Grid columns="repeat(3, 1fr)" columnGap="8" style={styles.wrapper}>
      {sortedShadow.map(([key, value]) => (
        <Flex
          key={key}
          align="center"
          justify="center"
          gap="2"
          style={[styles.box, styles.shadow(value)]}
        >
          <Text>{key}</Text>
        </Flex>
      ))}
    </Grid>
  );
}
