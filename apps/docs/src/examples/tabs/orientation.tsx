import * as stylex from "@stylexjs/stylex";

import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Orientation() {
  return (
    <Tabs orientation="vertical" style={styles.root}>
      <TabList aria-label="Vertical tabs">
        <Tab id="v-tab1">Tab 1</Tab>
        <Tab id="v-tab2">Tab 2</Tab>
        <Tab id="v-tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="v-tab1">Content for vertical tab 1</TabPanel>
      <TabPanel id="v-tab2">Content for vertical tab 2</TabPanel>
      <TabPanel id="v-tab3">Content for vertical tab 3</TabPanel>
    </Tabs>
  );
}
