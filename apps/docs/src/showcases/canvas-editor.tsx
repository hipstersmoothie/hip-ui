"use client";
import "tldraw/tldraw.css";
import * as stylex from "@stylexjs/stylex";
import {
  Plus,
  MousePointer,
  Square,
  Hand,
  HelpCircle,
  Folder,
  ImageIcon,
  NotebookIcon,
  Pencil,
  ArrowRight,
  CaseSensitive,
  Eraser,
  ArrowUpRight,
  TypeIcon,
  NotebookText,
  Undo,
  Redo,
  Trash2,
  Copy,
  Layers2,
  Layers,
  Blend,
  SquareAsterisk,
  SquareDashed,
  Scan,
  PanelBottomDashed,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignStart,
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
  TriangleRight,
} from "lucide-react";
import { createContext, memo, use, useState } from "react";
import { Key, useDragAndDrop } from "react-aria-components";
import {
  ArrowShapeUtil,
  Editor,
  TLArrowShape,
  Tldraw,
  TLGeoShape,
  TLShapeId,
  useActions,
  useValue,
} from "tldraw";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureTitle,
} from "@/components/disclosure";
import { EditableText } from "@/components/editable-text";
import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
import { IconButton } from "@/components/icon-button";
import { ListBox, ListBoxItem } from "@/components/listbox";
import { NumberField } from "@/components/number-field";
import { Select, SelectItem } from "@/components/select";
import { Separator } from "@/components/separator";
import { TableDropIndicator } from "@/components/table";
import { usePopoverStyles } from "@/components/theme/usePopoverStyles";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";
import { Toolbar, ToolbarGroup } from "@/components/toolbar";
import { Tooltip } from "@/components/tooltip";
import { Tree, TreeItem } from "@/components/tree";
import { Text } from "@/components/typography/text";

import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { shadow } from "../components/theme/shadow.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/components/color-swatch-picker";

const styles = stylex.create({
  main: {
    backgroundColor: uiColor.bg,
    borderColor: uiColor.border2,
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["2xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: shadow.md,
    display: "flex",
    flexDirection: "column",
    height: 800,
    marginTop: spacing["16"],
    overflow: "hidden",
    position: "relative",
    width: 1200,
  },
  editor: {
    flexGrow: 1,
  },
  leftSidebar: {
    backgroundColor: uiColor.bgSubtle,
    borderRightColor: uiColor.border2,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: {
    borderBottomColor: uiColor.border2,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: spacing["3"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["3"],
  },
  projectTitle: {
    alignItems: "center",
    display: "flex",
    gap: spacing["2"],
  },

  bottom: {
    marginTop: "auto",
  },
  sidebarTitle: {
    height: spacing["10"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["2.5"],
  },
  sidebarContent: {
    overflowY: "auto",
  },
  grow: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  canvasArea: {
    outline: "none",
    position: "relative",
  },
  rightSidebar: {
    backgroundColor: uiColor.bgSubtle,
    borderLeftColor: uiColor.border2,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  rightHeader: {
    alignItems: "center",
    borderBottomColor: uiColor.border2,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    display: "flex",
    gap: spacing["2"],
    justifyContent: "space-between",
    paddingBottom: spacing["3"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["3"],
  },
  bottomToolbar: {
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    left: "50%",
    marginBottom: spacing["6"],
    position: "absolute",
    transform: "translateX(-50%)",
    width: "100%",
  },
  sidebarFooter: {
    paddingBottom: spacing["3"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["1.5"],
  },
});

function getShapeName(editor: Editor, shapeId: TLShapeId) {
  const shape = editor.getShape(shapeId);

  if (!shape) return "Unknown shape";

  return (
    // meta.name is the first choice, then the shape's text, then the capitalized shape type
    (shape.meta.name as string) ||
    editor.getShapeUtil(shape).getText(shape) ||
    shape.type + " shape"
  );
}

function ShapeTreeItem({ shapeId }: { shapeId: TLShapeId }) {
  const editor = useEditorContext();

  const shape = useValue("shape", () => editor.getShape(shapeId), [editor]);
  const children = useValue(
    "children",
    () => editor.getSortedChildIdsForParent(shapeId),
    [editor],
  );
  const shapeName = useValue("shapeName", () => getShapeName(editor, shapeId), [
    editor,
  ]);

  return (
    <TreeItem
      key={shapeId}
      id={shapeId}
      textValue={shapeName}
      title={
        <EditableText
          onChange={(value) => {
            if (!shape?.type) return;
            editor.updateShape({
              id: shapeId,
              type: shape.type,
              meta: {
                name: value,
              },
            });
          }}
        >
          {shapeName}
        </EditableText>
      }
      value={shape}
      prefix={
        children.length > 0 ? (
          <Folder />
        ) : shape?.type === "text" ? (
          <CaseSensitive />
        ) : shape?.type === "image" ? (
          <ImageIcon />
        ) : shape?.type === "note" ? (
          <NotebookIcon />
        ) : shape?.type === "draw" ? (
          <Pencil />
        ) : shape?.type === "arrow" ? (
          <ArrowRight />
        ) : shape?.type === "geo" ? (
          <Square />
        ) : null
      }
    >
      {children.map((childId) => (
        <ShapeTreeItem key={childId} shapeId={childId} />
      ))}
    </TreeItem>
  );
}

function ShapeTree() {
  const editor = useEditorContext();
  const selectedShapeIds = useValue(
    "selectedShapeIds",
    () => editor.getSelectedShapeIds(),
    [editor],
  );
  const shapeIds = useValue(
    "shapeIds",
    () => editor.getSortedChildIdsForParent(editor.getCurrentPageId()),
    [editor],
  );
  const { dragAndDropHooks } = useDragAndDrop<TLShapeId>({
    getItems: (_, items) => {
      return items.map((item) => {
        const shape = editor.getShape(item);
        if (!shape) return { "text/plain": "" };
        return {
          "text/plain": `${shape.type} ${shape.typeName}`,
        };
      });
    },
    onMove(e) {
      const targetShape = editor.getShape(e.target.key as TLShapeId);
      const draggedShapeIds = [...e.keys] as TLShapeId[];

      if (!targetShape || draggedShapeIds.length === 0) return;
      if (draggedShapeIds.includes(e.target.key as TLShapeId)) return;

      const parentId = targetShape.parentId;
      const draggedShapes = draggedShapeIds
        .map((id) => editor.getShape(id))
        .filter(
          (shape): shape is NonNullable<typeof shape> => shape !== undefined,
        );

      if (draggedShapes.length === 0) return;

      if (e.target.dropPosition === "before") {
        const firstIndex = targetShape.index;
        editor.reparentShapes(draggedShapeIds, parentId, firstIndex);

        if (parentId && draggedShapeIds[0]) {
          editor.reparentShapes(
            [targetShape.id],
            parentId,
            editor.getShape(draggedShapeIds[0])?.index,
          );
        }
      } else {
        editor.reparentShapes(draggedShapeIds, parentId, targetShape.index);
      }
    },
    renderDropIndicator(target) {
      return <TableDropIndicator target={target} />;
    },
  });

  return (
    <Tree
      aria-labelledby="layers-title"
      selectionMode="multiple"
      selectionBehavior="replace"
      dragAndDropHooks={dragAndDropHooks}
      selectedKeys={selectedShapeIds}
      onSelectionChange={(keys) => {
        if (keys === "all") return;
        editor.select(...([...keys] as TLShapeId[]));
      }}
    >
      {shapeIds.map((shapeId) => (
        <ShapeTreeItem key={shapeId} shapeId={shapeId} />
      ))}
    </Tree>
  );
}

function ZoomControl() {
  const editor = useEditorContext();
  const zoom = useValue("zoom", () => editor.getZoomLevel(), [editor]);

  return (
    <NumberField
      aria-label="Zoom level"
      value={zoom}
      formatOptions={{
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }}
      onChange={(v) => {
        editor.setCamera({
          ...editor.getCamera(),
          z: v,
        });
      }}
    />
  );
}

function LeftSidebar() {
  const editor = useEditorContext();
  const [projectName, setProjectName] = useState("Untitled");
  const pages = useValue("pageIds", () => editor.getPages(), [editor]);
  const currentPage = useValue("currentPage", () => editor.getCurrentPage(), [
    editor,
  ]);

  return (
    <div {...stylex.props(styles.leftSidebar)}>
      <div {...stylex.props(styles.sidebarHeader)}>
        <Flex direction="column" gap="1">
          <div {...stylex.props(styles.projectTitle)}>
            <Text size="base" weight="medium">
              <EditableText onChange={(value) => setProjectName(value)}>
                {projectName}
              </EditableText>
            </Text>
          </div>
        </Flex>
      </div>

      <Flex
        direction="column"
        gap="2"
        style={[styles.sidebarContent, styles.grow]}
      >
        <Flex direction="column">
          <Flex
            direction="row"
            gap="2"
            justify="between"
            align="center"
            style={styles.sidebarTitle}
          >
            <Text
              size="sm"
              weight="semibold"
              variant="secondary"
              id="pages-title"
            >
              Pages
            </Text>
            <IconButton
              aria-label="Add page"
              size="sm"
              variant="tertiary"
              onPress={() => {
                editor.createPage({ name: "Page 1" });
                const newPage = editor.getPages().at(-1);
                if (newPage) {
                  editor.setCurrentPage(newPage.id);
                }
              }}
            >
              <Plus size={16} />
            </IconButton>
          </Flex>
          <ListBox
            aria-label="Pages"
            items={pages}
            selectionMode="single"
            selectedKeys={[currentPage.id]}
            onSelectionChange={(keys) => {
              if (keys === "all") return;
              const page = pages.find((page) => page.id === [...keys][0]);
              if (page) {
                editor.setCurrentPage(page);
              }
            }}
          >
            {(page) => (
              <ListBoxItem key={page.id} id={page.id}>
                <EditableText
                  onChange={(value) => {
                    editor.updatePage({
                      id: page.id,
                      name: value,
                    });
                  }}
                >
                  {page.name}
                </EditableText>
              </ListBoxItem>
            )}
          </ListBox>
        </Flex>

        <Separator />

        <Flex direction="column">
          <Flex
            direction="row"
            gap="2"
            justify="between"
            align="center"
            style={styles.sidebarTitle}
          >
            <Text
              size="sm"
              weight="semibold"
              variant="secondary"
              id="layers-title"
            >
              Layers
            </Text>
          </Flex>
          <ShapeTree />
        </Flex>

        <Separator style={styles.bottom} />
        <Flex direction="column" gap="4" style={styles.sidebarFooter}>
          <ZoomControl />
        </Flex>
      </Flex>
    </div>
  );
}

function ArrowProperties() {
  const editor = useEditorContext();
  const s = useValue("shape", () => editor.getSelectedShapes()[0], [editor]);

  if (!s || s.type !== ArrowShapeUtil.type) return null;

  const shape = s as TLArrowShape;

  return (
    <>
      <Disclosure defaultExpanded>
        <DisclosureTitle>
          <Text size="sm" weight="semibold">
            Arrow Properties
          </Text>
        </DisclosureTitle>
        <DisclosurePanel>
          <Flex direction="column" gap="3">
            <Select
              label="Line Style"
              value={shape.props.kind}
              onChange={(value) => {
                editor.updateShape({
                  id: shape.id,
                  type: shape.type,
                  props: { kind: value },
                });
              }}
            >
              <SelectItem id="arc">Arc</SelectItem>
              <SelectItem id="elbow">Elbow</SelectItem>
            </Select>
            <Flex direction="row" gap="2">
              <Select
                label="Start Arrow"
                style={styles.grow}
                value={shape.props.arrowheadStart}
                onChange={(value) => {
                  editor.updateShape({
                    id: shape.id,
                    type: shape.type,
                    props: { arrowheadStart: value },
                  });
                }}
              >
                <SelectItem id="none">None</SelectItem>
                <SelectItem id="arrow">Arrow</SelectItem>
                <SelectItem id="triangle">Triangle</SelectItem>
                <SelectItem id="triangle">Triangle</SelectItem>
                <SelectItem id="square">Square</SelectItem>
                <SelectItem id="dot">Dot</SelectItem>
                <SelectItem id="diamond">Diamond</SelectItem>
                <SelectItem id="inverted">Inverted</SelectItem>
                <SelectItem id="bar">Bar</SelectItem>
              </Select>
              <Select
                label="End Arrow"
                style={styles.grow}
                value={shape.props.arrowheadEnd}
                onChange={(value) => {
                  editor.updateShape({
                    id: shape.id,
                    type: shape.type,
                    props: { arrowheadEnd: value },
                  });
                }}
              >
                <SelectItem id="none">None</SelectItem>
                <SelectItem id="arrow">Arrow</SelectItem>
                <SelectItem id="triangle">Triangle</SelectItem>
                <SelectItem id="triangle">Triangle</SelectItem>
                <SelectItem id="square">Square</SelectItem>
                <SelectItem id="dot">Dot</SelectItem>
                <SelectItem id="diamond">Diamond</SelectItem>
                <SelectItem id="inverted">Inverted</SelectItem>
                <SelectItem id="bar">Bar</SelectItem>
              </Select>
            </Flex>
          </Flex>
        </DisclosurePanel>
      </Disclosure>
      <Separator />
    </>
  );
}

function GeometricShapeProperties() {
  const editor = useEditorContext();
  const s = useValue("shape", () => editor.getSelectedShapes()[0], [editor]);

  if (!s || s.type !== "geo") return null;

  const shape = s as TLGeoShape;

  return (
    <>
      <Disclosure defaultExpanded>
        <DisclosureTitle>
          <Text size="sm" weight="semibold">
            Shape
          </Text>
        </DisclosureTitle>
        <DisclosurePanel>
          <Flex direction="column" gap="2">
            <Select
              aria-label="Shape type"
              value={shape.props.geo}
              onChange={(value) => {
                editor.updateShape({
                  id: shape.id,
                  type: shape.type,
                  props: { geo: value },
                });
              }}
            >
              <SelectItem id="rectangle">Rectangle</SelectItem>
              <SelectItem id="ellipse">Ellipse</SelectItem>
              <SelectItem id="triangle">Triangle</SelectItem>
              <SelectItem id="diamond">Diamond</SelectItem>
              <SelectItem id="star">star</SelectItem>
              <SelectItem id="pentagon">pentagon</SelectItem>
              <SelectItem id="hexagon">hexagon</SelectItem>
              <SelectItem id="octagon">octagon</SelectItem>
              <SelectItem id="rhombus">rhombus</SelectItem>
              <SelectItem id="rhombus-left">rhombus-left</SelectItem>
              <SelectItem id="oval">oval</SelectItem>
              <SelectItem id="arrow-left">arrow-left</SelectItem>
              <SelectItem id="arrow-right">arrow-right</SelectItem>
              <SelectItem id="arrow-up">arrow-up</SelectItem>
              <SelectItem id="arrow-down">arrow-down</SelectItem>
              <SelectItem id="cloud">cloud</SelectItem>
              <SelectItem id="x-box">x-box</SelectItem>
              <SelectItem id="check-box">check-box</SelectItem>
              <SelectItem id="heart">heart</SelectItem>
            </Select>
          </Flex>
        </DisclosurePanel>
      </Disclosure>
      <Separator />
    </>
  );
}

const tldrawColors = [
  "black",
  "grey",
  "light-violet",
  "violet",
  "blue",
  "light-blue",
  "yellow",
  "orange",
  "green",
  "light-green",
  "light-red",
  "red",
  "white",
] as const;
type TldrawColor = (typeof tldrawColors)[number];

const tldrawColorMap: Record<TldrawColor, string> = {
  black: "#000000",
  grey: "#808080",
  "light-violet": "#800080",
  violet: "#800080",
  blue: "#0000FF",
  "light-blue": "#0000FF",
  yellow: "#FFFF00",
  orange: "#FFA500",
  green: "#00FF00",
  "light-green": "#00FF00",
  "light-red": "#FF0000",
  red: "#FF0000",
  white: "#FFFFFF",
};

function AppearanceProperties() {
  const editor = useEditorContext();
  const shape = useValue("shape", () => editor.getSelectedShapes()[0], [
    editor,
  ]);

  if (
    !shape ||
    !(
      "size" in shape.props ||
      "fill" in shape.props ||
      "dash" in shape.props ||
      "color" in shape.props
    )
  ) {
    return null;
  }

  return (
    <>
      <Disclosure defaultExpanded>
        <DisclosureTitle>
          <Text size="sm" weight="semibold">
            Appearance
          </Text>
        </DisclosureTitle>
        <DisclosurePanel>
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              {"size" in shape.props && (
                <ToggleButtonGroup
                  variant="separate"
                  itemsPerRow={4}
                  selectedKeys={[shape.props.size]}
                  onSelectionChange={(keys) => {
                    const newSize = [...keys][0];
                    if (newSize) {
                      editor.updateShape({
                        id: shape.id,
                        type: shape.type,
                        props: {
                          size: newSize,
                        },
                      });
                    }
                  }}
                >
                  <Tooltip text="Small">
                    <ToggleButton id="s" variant="outline">
                      S
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Medium">
                    <ToggleButton id="m" variant="outline">
                      M
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Large">
                    <ToggleButton id="l" variant="outline">
                      L
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Solid">
                    <ToggleButton id="xl" variant="outline">
                      XL
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              )}
              {"fill" in shape.props && (
                <ToggleButtonGroup
                  variant="separate"
                  itemsPerRow={4}
                  selectedKeys={[shape.props.fill as Key]}
                  onSelectionChange={(keys) => {
                    const newFill = [...keys][0];
                    if (newFill) {
                      editor.updateShape({
                        id: shape.id,
                        type: shape.type,
                        props: {
                          fill: newFill,
                        },
                      });
                    }
                  }}
                >
                  <Tooltip text="Fill: None">
                    <ToggleButton id="none" variant="outline">
                      <Blend />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Fill: Partial">
                    <ToggleButton id="semi" variant="outline">
                      <Layers2 />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Fill: Solid">
                    <ToggleButton id="solid" variant="outline">
                      <Layers />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Fill: Pattern">
                    <ToggleButton id="pattern" variant="outline">
                      <SquareAsterisk />
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              )}
              {"dash" in shape.props && (
                <ToggleButtonGroup
                  variant="separate"
                  itemsPerRow={4}
                  selectedKeys={[shape.props.dash as Key]}
                  onSelectionChange={(keys) => {
                    const newStroke = [...keys][0];
                    if (newStroke) {
                      editor.updateShape({
                        id: shape.id,
                        type: shape.type,
                        props: {
                          dash: newStroke,
                        },
                      });
                    }
                  }}
                >
                  <Tooltip text="Stroke: Dashed">
                    <ToggleButton id="dashed" variant="outline">
                      <PanelBottomDashed />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Stroke: Draw">
                    <ToggleButton id="draw" variant="outline">
                      <Scan />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Stroke: Dotted">
                    <ToggleButton id="dotted" variant="outline">
                      <SquareDashed />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Stroke: Solid">
                    <ToggleButton id="solid" variant="outline">
                      <Square />
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              )}
            </Flex>
            {"color" in shape.props && (
              <ColorSwatchPicker
                value={tldrawColorMap[shape.props.color as TldrawColor]}
                onChange={(color) => {
                  const tldrawColor = Object.keys(tldrawColorMap).find(
                    (key) =>
                      tldrawColorMap[key as TldrawColor] ===
                      color.toString("hex"),
                  );

                  if (tldrawColor) {
                    editor.updateShape({
                      id: shape.id,
                      type: shape.type,
                      props: { color: tldrawColor as TldrawColor },
                    });
                  }
                }}
              >
                {tldrawColors.map((color) => (
                  <ColorSwatchPickerItem
                    key={color}
                    color={tldrawColorMap[color]}
                  />
                ))}
              </ColorSwatchPicker>
            )}
          </Flex>
        </DisclosurePanel>
      </Disclosure>
      <Separator />
    </>
  );
}

function FontSettingsProperties() {
  const editor = useEditorContext();
  const shapeId = useValue("shapeId", () => editor.getSelectedShapes()[0]?.id, [
    editor,
  ]);
  const shapeType = useValue(
    "shapeType",
    () => editor.getSelectedShapes()[0]?.type,
    [editor],
  );
  const fontFamily = useValue(
    "fontFamily",
    () => {
      if (!shapeId) return null;
      const shape = editor.getShape(shapeId);
      if (!shape || !("font" in shape.props)) return null;
      return shape.props.font;
    },
    [editor],
  );
  const align = useValue(
    "align",
    () => {
      if (!shapeId) return null;
      const shape = editor.getShape(shapeId);
      if (!shape || !("align" in shape.props)) return null;
      return shape.props.align;
    },
    [editor],
  );
  const verticalAlign = useValue(
    "verticalAlign",
    () => {
      if (!shapeId) return null;
      const shape = editor.getShape(shapeId);
      if (!shape || !("verticalAlign" in shape.props)) return null;
      return shape.props.verticalAlign;
    },
    [editor],
  );
  const labelColor = useValue(
    "labelColor",
    () => {
      if (!shapeId) return null;
      const shape = editor.getShape(shapeId);
      if (!shape || !("labelColor" in shape.props)) return null;
      return shape.props.labelColor;
    },
    [editor],
  );

  if (!fontFamily || !shapeId || !shapeType || !labelColor) {
    return null;
  }

  return (
    <>
      <Disclosure defaultExpanded>
        <DisclosureTitle>
          <Text size="sm" weight="semibold">
            Font Settings
          </Text>
        </DisclosureTitle>
        <DisclosurePanel>
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Select
                label="Family"
                placeholder="Select font family"
                value={fontFamily}
                onChange={(value) => {
                  editor.updateShape({
                    id: shapeId,
                    type: shapeType,
                    props: { font: value },
                  });
                }}
              >
                <SelectItem id="draw">Draw</SelectItem>
                <SelectItem id="sans">Sans</SelectItem>
                <SelectItem id="serif">Serif</SelectItem>
                <SelectItem id="mono">Mono</SelectItem>
              </Select>
              {align && (
                <ToggleButtonGroup
                  variant="separate"
                  itemsPerRow={4}
                  selectedKeys={[align]}
                  onSelectionChange={(keys) => {
                    const newAlign = [...keys][0];
                    if (newAlign) {
                      editor.updateShape({
                        id: shapeId,
                        type: shapeType,
                        props: { align: newAlign },
                      });
                    }
                  }}
                >
                  <Tooltip text="Align: Start">
                    <ToggleButton id="start" variant="outline">
                      <TextAlignStart />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Align: Middle">
                    <ToggleButton id="middle" variant="outline">
                      <TextAlignCenter />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Align: End">
                    <ToggleButton id="end" variant="outline">
                      <TextAlignEnd />
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              )}
              {verticalAlign && (
                <ToggleButtonGroup
                  variant="separate"
                  itemsPerRow={4}
                  selectedKeys={[verticalAlign]}
                  onSelectionChange={(keys) => {
                    const newAlign = [...keys][0];
                    if (newAlign) {
                      editor.updateShape({
                        id: shapeId,
                        type: shapeType,
                        props: { verticalAlign: newAlign },
                      });
                    }
                  }}
                >
                  <Tooltip text="Vertical Align: Start">
                    <ToggleButton id="start" variant="outline">
                      <AlignStartHorizontal />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Vertical Align: Middle">
                    <ToggleButton id="middle" variant="outline">
                      <AlignCenterHorizontal />
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip text="Vertical Align: End">
                    <ToggleButton id="end" variant="outline">
                      <AlignEndHorizontal />
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              )}
            </Flex>

            <Separator />
            <ColorSwatchPicker
              value={tldrawColorMap[labelColor as TldrawColor]}
              onChange={(color) => {
                const tldrawColor = Object.keys(tldrawColorMap).find(
                  (key) =>
                    tldrawColorMap[key as TldrawColor] ===
                    color.toString("hex"),
                );

                if (tldrawColor) {
                  editor.updateShape({
                    id: shapeId,
                    type: shapeType,
                    props: { labelColor: tldrawColor as TldrawColor },
                  });
                }
              }}
            >
              {tldrawColors.map((color) => (
                <ColorSwatchPickerItem
                  key={color}
                  color={tldrawColorMap[color]}
                />
              ))}
            </ColorSwatchPicker>
          </Flex>
        </DisclosurePanel>
      </Disclosure>
      <Separator />
    </>
  );
}

function DimensionsProperties() {
  const editor = useEditorContext();
  const shape = useValue("shape", () => editor.getSelectedShapes()[0], [
    editor,
  ]);

  if (!shape) {
    return null;
  }

  return (
    <>
      <Disclosure defaultExpanded>
        <DisclosureTitle>
          <Text size="sm" weight="semibold">
            Dimensions
          </Text>
        </DisclosureTitle>
        <DisclosurePanel>
          <Flex direction="column" gap="2">
            <Flex direction="row" gap="2">
              <NumberField
                aria-label="X position"
                hideStepper
                style={styles.grow}
                value={shape.x}
                prefix={
                  <Text size="xs" weight="semibold" variant="secondary">
                    X
                  </Text>
                }
                onChange={(x) => {
                  editor.updateShape({
                    id: shape.id,
                    type: shape.type,
                    x,
                  });
                }}
              />
              <NumberField
                aria-label="Y position"
                hideStepper
                style={styles.grow}
                value={shape.y}
                prefix={
                  <Text size="xs" weight="semibold" variant="secondary">
                    Y
                  </Text>
                }
                onChange={(y) => {
                  editor.updateShape({
                    id: shape.id,
                    type: shape.type,
                    y,
                  });
                }}
              />
            </Flex>
            {"w" in shape.props && "h" in shape.props && (
              <Flex direction="row" gap="2">
                <NumberField
                  aria-label="Width"
                  hideStepper
                  style={styles.grow}
                  value={shape.props.w}
                  minValue={1}
                  prefix={
                    <Text size="xs" weight="semibold" variant="secondary">
                      W
                    </Text>
                  }
                  onChange={(w) => {
                    editor.updateShape({
                      id: shape.id,
                      type: shape.type,
                      props: { w },
                    });
                  }}
                />
                <NumberField
                  aria-label="Height"
                  hideStepper
                  style={styles.grow}
                  value={shape.props.h}
                  minValue={1}
                  prefix={
                    <Text size="xs" weight="semibold" variant="secondary">
                      H
                    </Text>
                  }
                  onChange={(h) => {
                    editor.updateShape({
                      id: shape.id,
                      type: shape.type,
                      props: { h },
                    });
                  }}
                />
              </Flex>
            )}
            <Flex direction="row" gap="2">
              <NumberField
                aria-label="Rotation"
                hideStepper
                style={styles.grow}
                value={shape.rotation * (180 / Math.PI)}
                prefix={<TriangleRight />}
                onChange={(rotation) => {
                  editor.updateShape({
                    id: shape.id,
                    type: shape.type,
                    rotation: rotation * (Math.PI / 180),
                  });
                }}
              />
              <div {...stylex.props(styles.grow)} />
            </Flex>
          </Flex>
        </DisclosurePanel>
      </Disclosure>
      <Separator />
    </>
  );
}

const RightSidebar = memo(function RightSidebar() {
  const editor = useEditorContext();
  const shapeTitles = useValue(
    "shapeTitles",
    () => editor.getSelectedShapes().map((shape) => shape.typeName),
    [editor],
  );

  if (shapeTitles.length > 1) {
    return (
      <div {...stylex.props(styles.rightSidebar)}>
        <Text size="sm" weight="semibold">
          {shapeTitles.length} shapes selected
        </Text>
      </div>
    );
  }

  const shapeTitle = shapeTitles[0];

  if (!shapeTitle) {
    return (
      <div {...stylex.props(styles.rightSidebar)}>
        <div {...stylex.props(styles.rightHeader)}>
          <Text size="sm" weight="semibold">
            No shape selected
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.rightSidebar)}>
      <div {...stylex.props(styles.rightHeader)}>
        <Text size="sm" weight="semibold">
          {shapeTitle}
        </Text>
      </div>

      <DimensionsProperties />
      <AppearanceProperties />
      <FontSettingsProperties />
      <ArrowProperties />
      <GeometricShapeProperties />
    </div>
  );
});

function BottomToolbar() {
  const popoverStyles = usePopoverStyles();
  const editor = useEditorContext();
  const selectedToolId = useValue(
    "selectedTool",
    () => editor.getCurrentToolId(),
    [editor],
  );
  const canUndo = useValue("canUndo", () => editor.getCanUndo(), [editor]);
  const canRedo = useValue("canRedo", () => editor.getCanRedo(), [editor]);

  const actions = useActions();

  return (
    <div {...stylex.props(styles.bottomToolbar)}>
      <Toolbar orientation="horizontal">
        <div {...stylex.props(popoverStyles.wrapper)}>
          <IconButton
            aria-label="Undo"
            size="lg"
            variant="tertiary"
            isDisabled={!canUndo}
            onPress={() => void actions.undo?.onSelect("actions-menu")}
          >
            <Undo />
          </IconButton>
          <IconButton
            aria-label="Redo"
            size="lg"
            variant="tertiary"
            isDisabled={!canRedo}
            onPress={() => void actions.redo?.onSelect("actions-menu")}
          >
            <Redo />
          </IconButton>
        </div>
        <div {...stylex.props(popoverStyles.wrapper)}>
          <IconButton
            aria-label="Undo"
            size="lg"
            variant="tertiary"
            onPress={() => void actions.delete?.onSelect("actions-menu")}
          >
            <Trash2 />
          </IconButton>
          <IconButton
            aria-label="Redo"
            size="lg"
            variant="tertiary"
            onPress={() => void actions.duplicate?.onSelect("actions-menu")}
          >
            <Copy />
          </IconButton>
        </div>
        <div {...stylex.props(popoverStyles.wrapper)}>
          <ToolbarGroup>
            <ToggleButtonGroup
              selectionMode="single"
              defaultSelectedKeys={[selectedToolId]}
              onSelectionChange={(keys) => {
                const newToolId = [...keys][0];

                if (newToolId) {
                  editor.setCurrentTool(newToolId as string);
                }
              }}
            >
              <ToggleButton
                id="select"
                aria-label="Select"
                variant={selectedToolId === "select" ? "primary" : "tertiary"}
                size="lg"
              >
                <MousePointer />
              </ToggleButton>
              <ToggleButton
                id="hand"
                aria-label="Move"
                variant={selectedToolId === "hand" ? "primary" : "tertiary"}
                size="lg"
              >
                <Hand />
              </ToggleButton>
              <ToggleButton
                id="draw"
                aria-label="Draw"
                variant={selectedToolId === "draw" ? "primary" : "tertiary"}
                size="lg"
              >
                <Pencil />
              </ToggleButton>
              <ToggleButton
                id="eraser"
                aria-label="Erase"
                variant={selectedToolId === "eraser" ? "primary" : "tertiary"}
                size="lg"
              >
                <Eraser />
              </ToggleButton>
              <ToggleButton
                id="arrow"
                aria-label="Arrow"
                variant={selectedToolId === "arrow" ? "primary" : "tertiary"}
                size="lg"
              >
                <ArrowUpRight />
              </ToggleButton>
              <ToggleButton
                id="text"
                aria-label="Type"
                variant={selectedToolId === "text" ? "primary" : "tertiary"}
                size="lg"
              >
                <TypeIcon />
              </ToggleButton>
              <ToggleButton
                id="note"
                aria-label="Note"
                variant={selectedToolId === "note" ? "primary" : "tertiary"}
                size="lg"
              >
                <NotebookText />
              </ToggleButton>
              <ToggleButton
                id="geo"
                aria-label="Geo"
                variant={selectedToolId === "geo" ? "primary" : "tertiary"}
                size="lg"
              >
                <Square />
              </ToggleButton>
            </ToggleButtonGroup>
          </ToolbarGroup>
        </div>
        <div {...stylex.props(popoverStyles.wrapper)}>
          <ToolbarGroup>
            <IconButton aria-label="Help" size="lg" variant="tertiary">
              <HelpCircle />
            </IconButton>
          </ToolbarGroup>
        </div>
      </Toolbar>
    </div>
  );
}

const EditorContext = createContext<Editor | null>(null);
function useEditorContext() {
  const editor = use(EditorContext);
  if (!editor) {
    throw new Error("Editor context not found");
  }
  return editor;
}

export function CanvasEditor() {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <div {...stylex.props(styles.main)}>
      <Grid columns="240px 1fr 240px" style={styles.editor}>
        {editor && (
          <EditorContext value={editor}>
            <LeftSidebar />
          </EditorContext>
        )}
        <Tldraw
          {...stylex.props(styles.canvasArea)}
          onMount={(editor) => setEditor(editor)}
          components={{
            Toolbar: null,
            NavigationPanel: null,
            MenuPanel: null,
            StylePanel: null,
          }}
        >
          {editor && (
            <EditorContext value={editor}>
              <BottomToolbar />
            </EditorContext>
          )}
        </Tldraw>
        {editor && (
          <EditorContext value={editor}>
            <RightSidebar />
          </EditorContext>
        )}
      </Grid>
    </div>
  );
}
