import * as stylex from "@stylexjs/stylex";
import {
  Menu,
  Share2,
  Save,
  Code,
  MoreVertical,
  RotateCcw,
  TextAlignJustify,
  Download,
  ListCheck,
} from "lucide-react";
import { useState } from "react";

import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";

import { Button } from "../components/button";
import { Flex } from "../components/flex";
import { IconButton } from "../components/icon-button";
import { Select, SelectItem, SelectSection } from "../components/select";
import { Separator } from "../components/separator";
import { Slider } from "../components/slider";
import { TextArea } from "../components/text-area";
import { radius } from "../components/theme/radius.stylex";
import {
  uiColor,
  primaryColor,
} from "../components/theme/semantic-color.stylex";
import { shadow } from "../components/theme/shadow.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { fontSize, fontWeight } from "../components/theme/typography.stylex";
import { Text } from "../components/typography/text";

const styles = stylex.create({
  main: {
    backgroundColor: uiColor.bg,
    borderColor: uiColor.border1,
    borderRadius: radius.lg,
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
  sectionLabel: {
    color: uiColor.text1,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["semibold"],
  },
  sliderWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
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
    <div {...stylex.props(styles.sliderWrapper)}>
      <Flex align="center" justify="between">
        <Text {...stylex.props(styles.sectionLabel)}>{label}</Text>
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
    </div>
  );
}

export function LLMApp() {
  const [temperature, setTemperature] = useState(0.6);
  const [maxLength, setMaxLength] = useState(2790);
  const [topP, setTopP] = useState(0.9);

  return (
    <div {...stylex.props(styles.main)}>
      {/* Header */}
      <Flex align="center" gap="4" style={styles.header}>
        <Text {...stylex.props(styles.title)}>Playground</Text>
        <Select aria-label="Mode" variant="secondary" placeholder="Q&A">
          <SelectSection>
            <SelectItem id="qa">Q&A</SelectItem>
            <SelectItem id="complete">Complete</SelectItem>
            <SelectItem id="edit">Edit</SelectItem>
          </SelectSection>
        </Select>
        <Flex gap="2">
          <Button variant="secondary">Save</Button>
          <Button variant="secondary">View code</Button>
          <Button variant="secondary">Share</Button>
          <IconButton label="More options" variant="secondary">
            <MoreVertical size={16} />
          </IconButton>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex gap="0" style={styles.content}>
        {/* Left Content */}
        <Flex direction="column" gap="4" style={styles.mainContent}>
          <TextArea
            placeholder="Write a tagline for an ice cream shop"
            isResizable={false}
            style={styles.promptWrapper}
          />
          <Flex align="center" justify="start" gap="3">
            <Button>Submit</Button>
            <IconButton label="Refresh" variant="secondary">
              <RotateCcw size={16} />
            </IconButton>
          </Flex>
        </Flex>

        {/* Right Sidebar */}
        <Flex direction="column" gap="10" style={styles.sidebar}>
          {/* Mode Section */}
          <Flex direction="column" gap="3">
            <Text {...stylex.props(styles.sectionLabel)}>Mode</Text>
            <SegmentedControl defaultSelectedKeys={["qa"]}>
              <SegmentedControlItem id="qa">
                <TextAlignJustify />
              </SegmentedControlItem>
              <SegmentedControlItem id="complete">
                <Download />
              </SegmentedControlItem>
              <SegmentedControlItem id="edit">
                <ListCheck />
              </SegmentedControlItem>
            </SegmentedControl>
          </Flex>

          {/* Model Section */}
          <Flex direction="column" gap="3">
            <Text {...stylex.props(styles.sectionLabel)}>Model</Text>
            <Select aria-label="Model">
              <SelectSection>
                <SelectItem id="davinci">text-davinci-003</SelectItem>
                <SelectItem id="curie">text-curie-001</SelectItem>
                <SelectItem id="ada">text-ada-001</SelectItem>
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
