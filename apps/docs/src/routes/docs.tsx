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
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Grid } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
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
    overscrollBehavior: "contain",
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

// Group component docs by folder name
const componentGroups = componentDocs.reduce(
  (acc, doc) => {
    // Extract folder name from path like "components/form/select" -> "form"
    const pathParts = doc._meta.path.split("/");
    const folderName =
      pathParts.length > 2 && pathParts[1] ? pathParts[1] : "components";
    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName]!.push(doc);
    return acc;
  },
  {} as Record<string, typeof componentDocs>,
);

const componentItems: SidebarItem[] = Object.entries(componentGroups)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([folderName, docs]) => ({
    id: `components-${folderName}`,
    label: folderName.charAt(0).toUpperCase() + folderName.slice(1),
    items: docs
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((doc) => ({
        id: doc._meta.path,
        label: doc.title,
        to: "/docs/$",
        params: { _splat: doc._meta.path },
      })),
  }));

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
    items: componentItems,
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
  .flatMap((item) => {
    if (!("items" in item) || !item.items) {
      return [item];
    }
    // Flatten nested items (for components with folder groups)
    return item.items.flatMap((subItem) => {
      if (subItem.items) {
        return subItem.items;
      }
      return [subItem];
    });
  })
  .filter((item): item is SidebarItem => item !== undefined);

function DarkModeToggle() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";

    setColorScheme(newColorScheme);
    localStorage.setItem("hip-ui-color-scheme", newColorScheme);
    document.body.style.colorScheme = newColorScheme;
  };

  useEffect(() => {
    const localColorScheme = localStorage.getItem("hip-ui-color-scheme");

    if (localColorScheme) {
      setColorScheme(localColorScheme as "light" | "dark");
    }
  }, []);

  return (
    <IconButton
      variant="secondary"
      label="Toggle Dark Mode"
      onPress={toggleColorScheme}
    >
      {colorScheme === "dark" ? <Moon /> : <Sun />}
    </IconButton>
  );
}

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
      <SidebarHeader action={<DarkModeToggle />}>
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
            {item.items.map((subItem) => {
              // If subItem has nested items, it's a group (like component folders)
              if (subItem.items) {
                return (
                  <SidebarSection key={subItem.id} title={subItem.label}>
                    {subItem.items.map((leafItem) => (
                      <SidebarItemLink
                        key={leafItem.id}
                        to={leafItem.to}
                        params={leafItem.params}
                        isActive={currentItem?.id === leafItem.id}
                      >
                        {leafItem.label}
                      </SidebarItemLink>
                    ))}
                  </SidebarSection>
                );
              }
              // Otherwise, it's a leaf item (like foundation/showcase docs)
              return (
                <SidebarSection key={subItem.id}>
                  <SidebarItemLink
                    to={subItem.to}
                    params={subItem.params}
                    isActive={currentItem?.id === subItem.id}
                  >
                    {subItem.label}
                  </SidebarItemLink>
                </SidebarSection>
              );
            })}
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
