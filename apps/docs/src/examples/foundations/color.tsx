import { radius } from "../../components/theme/radius.stylex";
import { Flex } from "../../components/flex";
import { gray } from "../../components/theme/colors/gray.stylex";
import { mauve } from "../../components/theme/colors/mauve.stylex";
import { olive } from "../../components/theme/colors/olive.stylex";
import { sage } from "../../components/theme/colors/sage.stylex";
import { sand } from "../../components/theme/colors/sand.stylex";
import { slate } from "../../components/theme/colors/slate.stylex";
import { tomato } from "../../components/theme/colors/tomato.stylex";
import { red } from "../../components/theme/colors/red.stylex";
import { ruby } from "../../components/theme/colors/ruby.stylex";
import { crimson } from "../../components/theme/colors/crimson.stylex";
import { pink } from "../../components/theme/colors/pink.stylex";
import { plum } from "../../components/theme/colors/plum.stylex";
import { purple } from "../../components/theme/colors/purple.stylex";
import { violet } from "../../components/theme/colors/violet.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { Text } from "../../components/typography/text";
import { iris } from "../../components/theme/colors/iris.stylex";
import { indigo } from "../../components/theme/colors/indigo.stylex";
import { blue } from "../../components/theme/colors/blue.stylex";
import { cyan } from "../../components/theme/colors/cyan.stylex";
import { teal } from "../../components/theme/colors/teal.stylex";
import { jade } from "../../components/theme/colors/jade.stylex";
import { green } from "../../components/theme/colors/green.stylex";
import { grass } from "../../components/theme/colors/grass.stylex";
import { bronze } from "../../components/theme/colors/bronze.stylex";
import { gold } from "../../components/theme/colors/gold.stylex";
import { brown } from "../../components/theme/colors/brown.stylex";
import { orange } from "../../components/theme/colors/orange.stylex";
import { amber } from "../../components/theme/colors/amber.stylex";
import { yellow } from "../../components/theme/colors/yellow.stylex";
import { lime } from "../../components/theme/colors/lime.stylex";
import { mint } from "../../components/theme/colors/mint.stylex";
import { sky } from "../../components/theme/colors/sky.stylex";
import * as stylex from "@stylexjs/stylex";
import { Fragment } from "react/jsx-runtime";
import { Grid } from "@/components/grid";

const styles = stylex.create({
  center: {
    textAlign: "center",
  },
  swatch: {
    paddingLeft: spacing["6"],
    paddingRight: spacing["6"],
    paddingTop: spacing["4"],
    paddingBottom: spacing["4"],
  },
});

const grays = [
  { name: "gray", value: gray },
  { name: "mauve", value: mauve },
  { name: "slate", value: slate },
  { name: "sage", value: sage },
  { name: "olive", value: olive },
  { name: "sand", value: sand },
];

const uiColors = [
  { name: "tomato", value: tomato },
  { name: "red", value: red },
  { name: "ruby", value: ruby },
  { name: "crimson", value: crimson },
  { name: "pink", value: pink },
  { name: "plum", value: plum },
  { name: "purple", value: purple },
  { name: "violet", value: violet },
  { name: "iris", value: iris },
  { name: "indigo", value: indigo },
  { name: "blue", value: blue },
  { name: "cyan", value: cyan },
  { name: "teal", value: teal },
  { name: "jade", value: jade },
  { name: "green", value: green },
  { name: "grass", value: grass },
  { name: "bronze", value: bronze },
  { name: "gold", value: gold },
  { name: "brown", value: brown },
  { name: "orange", value: orange },
  { name: "amber", value: amber },
  { name: "yellow", value: yellow },
  { name: "lime", value: lime },
  { name: "mint", value: mint },
  { name: "sky", value: sky },
];

export function GrayColors() {
  return (
    <Flex gap="0.5">
      {grays.map((color) => (
        <Flex key={color.name} align="center" justify="center" gap="4">
          <div
            {...stylex.props(styles.swatch)}
            style={{
              backgroundColor: color.value.solid1,
              color: color.value.bgSubtle,
            }}
          >
            <Text>{color.name}</Text>
          </div>
        </Flex>
      ))}
    </Flex>
  );
}

export function UiColors() {
  return (
    <Grid columnGap="1" columns="max-content max-content" alignItems="center">
      <Text weight="semibold">Name</Text>
      <Grid columns="repeat(12, 48px)" columnGap="1">
        <Text size="xs" variant="secondary" style={styles.center}>
          bg
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          bgSubtle
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          comp1
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          comp2
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          comp3
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          border1
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          border2
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          border3
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          solid1
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          solid2
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          text1
        </Text>
        <Text size="xs" variant="secondary" style={styles.center}>
          text2
        </Text>
      </Grid>
      {uiColors.map((color) => (
        <Fragment key={color.name}>
          <Text>{color.name}</Text>
          <Flex gap="1">
            {Object.entries(color.value).map(([key, value]) => {
              if (key.startsWith("__")) return null;

              return (
                <div
                  key={key}
                  {...stylex.props(styles.swatch)}
                  style={{ backgroundColor: value, color: value.text2 }}
                ></div>
              );
            })}
          </Flex>
        </Fragment>
      ))}
    </Grid>
  );
}
