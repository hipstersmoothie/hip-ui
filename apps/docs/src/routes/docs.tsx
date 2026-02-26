import type { LinkProps } from "@tanstack/react-router";

import {
  Outlet,
  createFileRoute,
  createLink,
  useLocation,
  useMatches,
} from "@tanstack/react-router";
import { allDocs } from "content-collections";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Flex } from "@/components/flex";
import { IconButton } from "@/components/icon-button";
import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/sidebar";
import { SidebarLayout } from "@/components/sidebar-layout";
import { Text } from "@/components/typography/text";
import { ThemePicker } from "@/lib/ThemePicker";

const SidebarItemLink = createLink(SidebarItem);

interface SidebarItem {
  id: string;
  label: string;
  to?: LinkProps["to"];
  params?: LinkProps["params"];
  items?: Array<SidebarItem>;
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
// oxlint-disable-next-line eslint-plugin-unicorn(no-array-reduce
const componentGroups = componentDocs.reduce(
  (acc, doc) => {
    // Extract folder name from path like "components/form/select" -> "form"
    const pathParts = doc._meta.path.split("/");
    const folderName =
      pathParts.length > 2 && pathParts[1] ? pathParts[1] : "components";
    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName]?.push(doc);
    return acc;
  },
  {} as Record<string, typeof componentDocs>,
);

const componentItems: Array<SidebarItem> = Object.entries(componentGroups)
  .toSorted(([a], [b]) => a.localeCompare(b))
  .map(([folderName, docs]) => ({
    id: `components-${folderName}`,
    label: folderName.charAt(0).toUpperCase() + folderName.slice(1),
    items: docs
      .toSorted((a, b) => a.title.localeCompare(b.title))
      .map((doc) => ({
        id: doc._meta.path,
        label: doc.title,
        to: "/docs/$",
        params: { _splat: doc._meta.path },
      })),
  }));

const sidebarItems: Array<SidebarItem> = [
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
  const match = matches.find((m) => m.pathname === location.pathname);
  const currentItem = flatItems.find(
    (item) =>
      match?.params &&
      "_splat" in match.params &&
      match.params._splat &&
      item.id === match.params._splat.replace("/docs/", ""),
  );

  return (
    <Sidebar>
      <SidebarHeader
        action={
          <Flex gap="0.5" align="center">
            <ThemePicker />
            <DarkModeToggle />
          </Flex>
        }
      >
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
    <SidebarLayout.Root>
      <SidebarLayout.NavigationSidebar>
        <DocSidebar />
      </SidebarLayout.NavigationSidebar>
      <Outlet />
    </SidebarLayout.Root>
  );
}
