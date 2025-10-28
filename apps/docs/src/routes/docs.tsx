import * as stylex from "@stylexjs/stylex";
import {
  createFileRoute,
  LinkProps,
  Outlet,
  useLocation,
  useMatches,
  createLink,
} from "@tanstack/react-router";
import { allDocs } from "content-collections";

import { Grid } from "@/components/grid";
import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";
import { Text } from "@/components/typography/text";

import { uiColor } from "../components/theme/semantic-color.stylex";

const SidebarItemLink = createLink(SidebarItem);

const styles = stylex.create({
  root: {
    width: "100%",
  },
  aside: {
    backgroundColor: uiColor.bgSubtle,
    borderRightColor: uiColor.border2,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    boxSizing: "border-box",
    height: "100vh",
    overflow: "auto",
    position: "sticky",
    top: 0,
  },
});

interface SidebarItem {
  id: string;
  label: string;
  to?: LinkProps["to"];
  params?: LinkProps["params"];
  items?: SidebarItem[];
}

const componentDocs = allDocs.filter((doc) =>
  doc._meta.directory.startsWith("components"),
);
const foundationDocs = allDocs.filter((doc) =>
  doc._meta.directory.startsWith("foundations"),
);
const showcaseDocs = allDocs.filter((doc) =>
  doc._meta.directory.startsWith("showcase"),
);

const sidebarItems: SidebarItem[] = [
  {
    id: "foundations",
    label: "Foundations",
    items: foundationDocs.map((doc) => ({
      id: doc._meta.path,
      label: doc.title,
      to: "/docs/$",
      params: { _splat: doc._meta.path },
    })),
  },
  {
    id: "components",
    label: "Components",
    items: componentDocs.map((doc) => ({
      id: doc._meta.path,
      label: doc.title,
      to: "/docs/$",
      params: { _splat: doc._meta.path },
    })),
  },
  {
    id: "showcases",
    label: "Showcases",
    items: showcaseDocs.map((doc) => ({
      id: doc._meta.path,
      label: doc.title,
      to: "/docs/$",
      params: { _splat: doc._meta.path },
    })),
  },
];

const flatItems = sidebarItems
  .flatMap((item) => ("items" in item ? item.items : [item]))
  .filter((item): item is SidebarItem => item !== undefined);

function DocSidebar() {
  const location = useLocation();
  const matches = useMatches();
  const match = matches.find((match) => match.pathname === location.pathname);
  const currentItem = flatItems.find(
    (item) =>
      match?.params &&
      "_splat" in match.params &&
      match.params._splat &&
      item.id === match.params._splat.replace("/docs/", ""),
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <Text font="serif" size="4xl" weight="bold">
          Hip UI
        </Text>
      </SidebarHeader>
      {sidebarItems.map((item) => {
        if (!item.items) {
          return null;
        }

        return (
          <SidebarGroup title={item.label} key={item.id}>
            <SidebarSection>
              {item.items.map((item) => (
                <SidebarItemLink
                  key={item.id}
                  to={item.to}
                  params={item.params}
                  isActive={currentItem?.id === item.id}
                >
                  {item.label}
                </SidebarItemLink>
              ))}
            </SidebarSection>
          </SidebarGroup>
        );
      })}
    </Sidebar>
  );
}

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Grid columns="max-content 1fr" columnGap="4" style={styles.root}>
      <aside {...stylex.props(styles.aside)}>
        <DocSidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </Grid>
  );
}
