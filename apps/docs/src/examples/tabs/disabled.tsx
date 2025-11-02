import * as stylex from "@stylexjs/stylex";

import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Disabled() {
  return (
    <Tabs style={styles.root}>
      <TabList aria-label="Navigation">
        <Tab id="home">Home</Tab>
        <Tab id="about" isDisabled>
          About
        </Tab>
        <Tab id="contact">Contact</Tab>
      </TabList>
      <TabPanel id="home">Welcome to the home page.</TabPanel>
      <TabPanel id="about">About us information.</TabPanel>
      <TabPanel id="contact">Contact information.</TabPanel>
    </Tabs>
  );
}
