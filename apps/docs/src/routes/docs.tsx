import { Grid } from "@/components/grid";
import { Tree, TreeItem } from "@/components/tree";
import { createFileRoute, LinkProps, Outlet } from "@tanstack/react-router";
import { Collection } from "react-aria-components";
import { createLink } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";
import { allDocs } from "content-collections";

const TreeItemLink = createLink(TreeItem);

const styles = stylex.create({
  main: {
    maxWidth: "80ch",
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
];

function Sidebar() {
  return (
    <Tree
      items={sidebarItems}
      defaultExpandedKeys={["foundations", "components"]}
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
    <Grid columns="200px 1fr">
      <aside>
        <Sidebar />
      </aside>
      <main {...stylex.props(styles.main)}>
        <Outlet />
      </main>
    </Grid>
  );
}
