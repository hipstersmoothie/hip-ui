import * as stylex from "@stylexjs/stylex";
import {
  MoreVertical,
  RotateCcw,
  TextAlignJustify,
  Download,
  ListCheck,
  Copy,
} from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import { Menu, MenuItem, MenuSeparator } from "@/components/menu";
import { Popover } from "@/components/popover";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";
import { TextField } from "@/components/text-field";

import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { IconButton } from "../components/icon-button";
import {
  Select,
  SelectItem,
  SelectSection,
  SelectSectionHeader,
} from "../components/select";
import { Slider } from "../components/slider";
import { TextArea } from "../components/text-area";
import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { shadow } from "../components/theme/shadow.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { fontSize, fontWeight } from "../components/theme/typography.stylex";
import { Text } from "../components/typography/text";

const styles = stylex.create({
  main: {
    backgroundColor: uiColor.bg,
    borderColor: uiColor.border1,
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
    height: 700,
    marginTop: spacing["16"],
    overflow: "hidden",
    width: 1200,
  },
  header: {
    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: spacing["3"],
    paddingLeft: spacing["6"],
    paddingRight: spacing["6"],
    paddingTop: spacing["4"],
  },
  title: {
    flexGrow: 1,
    fontSize: fontSize["xl"],
    fontWeight: fontWeight["semibold"],
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
  },
  mainContent: {
    flexGrow: 1,
    padding: spacing["6"],
  },
  promptWrapper: {
    flexGrow: 1,
    height: "100%",
  },
  sidebar: {
    backgroundColor: uiColor.bgSubtle,
    borderLeftColor: uiColor.border1,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    padding: spacing["6"],
    width: 320,
  },
  shareBox: {
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
    width: 400,
  },
  copyBox: {
    backgroundColor: uiColor.bgSubtle,
    borderColor: uiColor.border1,
    borderRadius: {
      default: radius["md"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["1"],
  },
  preview: {
    backgroundColor: uiColor.component3,
    borderColor: uiColor.border2,
    borderRadius: {
      default: radius["md"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    padding: spacing["4"],
  },
  grow: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
});

function ParameterSlider({
  label,
  value,
  onChange,
  maxValue,
  step = 0.1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  maxValue: number;
  step?: number;
}) {
  return (
    <Flex direction="column" gap="2">
      <Flex align="center" justify="between">
        <Text size="sm" weight="semibold">
          {label}
        </Text>
        <Text variant="secondary" size="sm">
          {typeof value === "number" ? value.toFixed(1) : value}
        </Text>
      </Flex>
      <Slider
        value={value}
        onChange={onChange}
        minValue={0}
        maxValue={maxValue}
        step={step}
        showValueLabel={false}
        aria-label={label}
      />
    </Flex>
  );
}

export function LLMApp() {
  const [temperature, setTemperature] = useState(0.6);
  const [maxLength, setMaxLength] = useState(2790);
  const [topP, setTopP] = useState(0.9);
  const [viewType, setViewType] = useState<
    "input" | "preview" | "instructions"
  >("input");

  return (
    <div {...stylex.props(styles.main)}>
      {/* Header */}
      <Flex align="center" gap="4" style={styles.header}>
        <Text {...stylex.props(styles.title)}>Playground</Text>
        <Select
          aria-label="Mode"
          variant="secondary"
          placeholder="Q&A"
          isSearchable
        >
          <SelectSection>
            <SelectItem id="qa">Q&A</SelectItem>
            <SelectItem id="complete">Complete</SelectItem>
            <SelectItem id="edit">Edit</SelectItem>
          </SelectSection>
        </Select>
        <Flex gap="2">
          <Dialog trigger={<Button variant="secondary">Save</Button>}>
            <DialogHeader>Save preset</DialogHeader>
            <DialogDescription>
              This will save the current playground state as a preset which you
              can access later or share with others.
            </DialogDescription>
            <DialogBody>
              <Flex direction="column" gap="2">
                <TextField label="Name" placeholder="Enter preset name" />
                <TextArea
                  label="Description"
                  placeholder="Enter preset description"
                />
              </Flex>
            </DialogBody>
            <DialogFooter>
              <Button variant="secondary">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </Dialog>
          <Button variant="secondary">View code</Button>
          <Popover
            placement="bottom end"
            style={styles.shareBox}
            trigger={<Button variant="secondary">Share</Button>}
          >
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <Text size="lg" weight="semibold">
                  Share
                </Text>
                <Text variant="secondary" size="sm">
                  Anyone who has this link and an OpenAI account will be able to
                  view this.
                </Text>
              </Flex>

              <Flex
                align="center"
                justify="between"
                gap="2"
                style={styles.copyBox}
              >
                <Text size="sm" variant="secondary" hasEllipsis>
                  https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003
                </Text>
                <IconButton label="Copy" variant="tertiary" size="sm">
                  <Copy size={16} />
                </IconButton>
              </Flex>
            </Flex>
          </Popover>
          <Menu
            placement="bottom end"
            trigger={
              <IconButton label="More options" variant="secondary">
                <MoreVertical size={16} />
              </IconButton>
            }
          >
            <MenuItem>Content filter preferences</MenuItem>
            <MenuSeparator />
            <MenuItem variant="destructive">Delete preset</MenuItem>
          </Menu>
        </Flex>
      </Flex>

      <Flex gap="0" style={styles.content}>
        <Flex direction="column" gap="4" style={styles.mainContent}>
          {viewType === "input" && (
            <TextArea
              placeholder="Write a tagline for an ice cream shop"
              isResizable={false}
              style={styles.promptWrapper}
            />
          )}
          {viewType === "preview" && (
            <Flex style={styles.promptWrapper} gap="6">
              <TextArea
                placeholder="Write a tagline for an ice cream shop"
                isResizable={false}
                style={styles.grow}
              />
              <div {...stylex.props(styles.preview, styles.grow)}>
                <Text size="sm" weight="semibold">
                  Preview
                </Text>
              </div>
            </Flex>
          )}
          {viewType === "instructions" && (
            <Flex style={styles.promptWrapper} gap="6">
              <Flex direction="column" gap="6" style={styles.grow}>
                <TextArea
                  placeholder="Write a tagline for an ice cream shop"
                  isResizable={false}
                  style={styles.grow}
                />
                <TextArea
                  label="Instructions"
                  placeholder="Write instructions for the AI to follow"
                  rows={4}
                />
              </Flex>
              <div {...stylex.props(styles.preview, styles.grow)}>
                <Text size="sm" weight="semibold">
                  Preview
                </Text>
              </div>
            </Flex>
          )}
          <Flex align="center" justify="start" gap="3">
            <Button>Submit</Button>
            <IconButton label="Refresh" variant="secondary">
              <RotateCcw size={16} />
            </IconButton>
          </Flex>
        </Flex>

        <Flex direction="column" gap="10" style={styles.sidebar}>
          <Flex direction="column" gap="3">
            <Text size="sm" weight="semibold">
              Mode
            </Text>
            <SegmentedControl
              selectedKeys={[viewType]}
              onSelectionChange={(keys) =>
                setViewType(
                  [...keys][0] as "input" | "preview" | "instructions",
                )
              }
            >
              <SegmentedControlItem id="input">
                <TextAlignJustify />
              </SegmentedControlItem>
              <SegmentedControlItem id="preview">
                <Download />
              </SegmentedControlItem>
              <SegmentedControlItem id="instructions">
                <ListCheck />
              </SegmentedControlItem>
            </SegmentedControl>
          </Flex>

          <Flex direction="column" gap="3">
            <Text size="sm" weight="semibold">
              Model
            </Text>
            <Select aria-label="Model" isSearchable>
              <SelectSection>
                <SelectSectionHeader>GPT 3</SelectSectionHeader>
                <SelectItem id="davinci">text-davinci-003</SelectItem>
                <SelectItem id="curie">text-curie-001</SelectItem>
                <SelectItem id="ada">text-ada-001</SelectItem>
              </SelectSection>
              <SelectSection>
                <SelectSectionHeader>Codex</SelectSectionHeader>
                <SelectItem id="codex-001">codex-001</SelectItem>
                <SelectItem id="codex-002">codex-002</SelectItem>
              </SelectSection>
            </Select>
          </Flex>

          <ParameterSlider
            label="Temperature"
            value={temperature}
            onChange={setTemperature}
            maxValue={2}
          />
          <ParameterSlider
            label="Maximum Length"
            value={maxLength}
            onChange={setMaxLength}
            maxValue={4000}
            step={1}
          />
          <ParameterSlider
            label="Top P"
            value={topP}
            onChange={setTopP}
            maxValue={1}
          />
        </Flex>
      </Flex>
    </div>
  );
}
