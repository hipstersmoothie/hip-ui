import { TableOfContents, Toc } from "@/components/table-of-contents";

// Mock table of contents data
const toc: Toc = [
  {
    id: "introduction",
    value: "Introduction",
    depth: 1,
    children: [],
  },
  {
    id: "getting-started",
    value: "Getting Started",
    depth: 1,
    children: [
      {
        id: "installation",
        value: "Installation",
        depth: 2,
        children: [],
      },
      {
        id: "configuration",
        value: "Configuration",
        depth: 2,
        children: [],
      },
    ],
  },
  {
    id: "components",
    value: "Components",
    depth: 1,
    children: [
      {
        id: "button",
        value: "Button",
        depth: 2,
        children: [
          {
            id: "button-props",
            value: "Props",
            depth: 3,
            children: [],
          },
          {
            id: "button-examples",
            value: "Examples",
            depth: 3,
            children: [],
          },
        ],
      },
      {
        id: "card",
        value: "Card",
        depth: 2,
        children: [],
      },
    ],
  },
  {
    id: "advanced",
    value: "Advanced",
    depth: 1,
    children: [],
  },
];

export function Basic() {
  return <TableOfContents toc={toc} />;
}
