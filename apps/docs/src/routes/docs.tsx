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
import { Collection } from "react-aria-components";

import { Grid } from "@/components/grid";
import { Tree, TreeItem } from "@/components/tree";

import { spacing } from "../components/theme/spacing.stylex";

const TreeItemLink = createLink(TreeItem);

const styles = stylex.create({
  aside: {
    height: "100vh",
    overflow: "auto",
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
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
    id: "home",
    label: "Home",
    to: "/",
  },
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

function Sidebar() {
  const location = useLocation();
  const matches = useMatches();
  const match = matches.find((match) => match.pathname === location.pathname);
  const item = flatItems.find(
    (item) =>
      match?.params &&
      "_splat" in match.params &&
      match.params._splat &&
      item.id === match.params._splat.replace("/docs/", ""),
  );

  return (
    <Tree
      items={sidebarItems}
      selectionMode="single"
      selectionBehavior="replace"
      defaultExpandedKeys={["foundations", "components"]}
      selectedKeys={item ? [item.id] : []}
    >
      {function renderTreeItem(item) {
        return (
          <TreeItemLink title={item.label} to={item.to} params={item.params}>
            <Collection items={item.items}>{renderTreeItem}</Collection>
          </TreeItemLink>
        );
      }}
    </Tree>
  );
}

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Grid columns="240px 1fr" columnGap="4">
      <aside {...stylex.props(styles.aside)}>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </Grid>
  );
}
