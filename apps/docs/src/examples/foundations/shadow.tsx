import { Flex } from "@/components/flex";
import { shadow } from "@/components/theme/shadow.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { Text } from "@/components/typography/text";
import * as stylex from "@stylexjs/stylex";
import { radius } from "../../components/theme/radius.stylex";
import { uiColor } from "../../components/theme/semantic-color.stylex";
import { Grid } from "@/components/grid";

const styles = stylex.create({
  wrapper: {
    marginTop: spacing["12"],
    marginBottom: spacing["12"],
  },
  box: {
    height: spacing["32"],
    width: spacing["32"],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: uiColor.border3,
  },
});

const sortedShadow = Object.entries(shadow).filter(
  ([key]) => !key.startsWith("__"),
);

export function Shadow() {
  return (
    <Grid columns="repeat(3, 1fr)" columnGap="8" style={styles.wrapper}>
      {sortedShadow.map(([key, value]) => (
        <Flex
          key={key}
          align="center"
          justify="center"
          gap="2"
          style={[styles.box, { boxShadow: value }]}
        >
          <Text>{key}</Text>
        </Flex>
      ))}
    </Grid>
  );
}
