import * as stylex from "@stylexjs/stylex";

import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
  },
});

export function Size() {
  return (
    <div {...stylex.props(styles.container)}>
      <div>
        <h3>Small</h3>
        <Tabs size="sm">
          <TabList aria-label="Small tabs">
            <Tab id="tab1-sm">Tab 1</Tab>
            <Tab id="tab2-sm">Tab 2</Tab>
            <Tab id="tab3-sm">Tab 3</Tab>
          </TabList>
          <TabPanel id="tab1-sm">Content for tab 1</TabPanel>
          <TabPanel id="tab2-sm">Content for tab 2</TabPanel>
          <TabPanel id="tab3-sm">Content for tab 3</TabPanel>
        </Tabs>
      </div>
      <div>
        <h3>Medium</h3>
        <Tabs size="md">
          <TabList aria-label="Medium tabs">
            <Tab id="tab1-md">Tab 1</Tab>
            <Tab id="tab2-md">Tab 2</Tab>
            <Tab id="tab3-md">Tab 3</Tab>
          </TabList>
          <TabPanel id="tab1-md">Content for tab 1</TabPanel>
          <TabPanel id="tab2-md">Content for tab 2</TabPanel>
          <TabPanel id="tab3-md">Content for tab 3</TabPanel>
        </Tabs>
      </div>
      <div>
        <h3>Large</h3>
        <Tabs size="lg">
          <TabList aria-label="Large tabs">
            <Tab id="tab1-lg">Tab 1</Tab>
            <Tab id="tab2-lg">Tab 2</Tab>
            <Tab id="tab3-lg">Tab 3</Tab>
          </TabList>
          <TabPanel id="tab1-lg">Content for tab 1</TabPanel>
          <TabPanel id="tab2-lg">Content for tab 2</TabPanel>
          <TabPanel id="tab3-lg">Content for tab 3</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
