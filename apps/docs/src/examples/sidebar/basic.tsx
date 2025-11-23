import * as stylex from "@stylexjs/stylex";

import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";

import { uiColor } from "../../components/theme/color.stylex";

const styles = stylex.create({
  wrapper: {
    backgroundColor: uiColor.bg,
    boxSizing: "border-box",
    height: 400,
    width: "100%",
  },
  sidebar: {
    backgroundColor: uiColor.bgSubtle,
    borderRightColor: uiColor.border2,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    boxSizing: "border-box",
    height: "100%",
    overflow: "auto",
  },
});

export function Basic() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Sidebar style={styles.sidebar}>
        <SidebarHeader>My App</SidebarHeader>
        <SidebarSection>
          <SidebarItem isActive>Dashboard</SidebarItem>
          <SidebarItem>Projects </SidebarItem>
          <SidebarItem>Settings </SidebarItem>
        </SidebarSection>

        <SidebarSection title="Settings">
          <SidebarItem>General</SidebarItem>
          <SidebarItem>Team</SidebarItem>
          <SidebarItem>Billing</SidebarItem>
        </SidebarSection>

        <SidebarGroup title="Reports">
          <SidebarSection title="Analytics">
            <SidebarItem>Overview</SidebarItem>
            <SidebarItem>Sales</SidebarItem>
            <SidebarItem>Customers</SidebarItem>
          </SidebarSection>
          <SidebarSection title="Teams">
            <SidebarItem>Team 1</SidebarItem>
            <SidebarItem>Team 2</SidebarItem>
            <SidebarItem>Team 3</SidebarItem>
          </SidebarSection>
        </SidebarGroup>
      </Sidebar>
    </div>
  );
}
