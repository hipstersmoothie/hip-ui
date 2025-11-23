import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { Key } from "react-aria";

import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { ListBox, ListBoxItem } from "@/components/listbox";
import { Text } from "@/components/typography/text";

import {
  animationDuration,
  animationTimingFunction,
  animations,
} from "../../components/theme/animations.stylex";
import { radius } from "../../components/theme/radius.stylex";
import { primaryColor, uiColor } from "../../components/theme/color.stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { Card } from "@/components/card";

const slideLeftToRight = stylex.keyframes({
  from: {
    left: spacing["4"],
    transform: "translateY(-50%)",
  },
  to: {
    left: `calc(100% - ${spacing["32"]} - ${spacing["4"]})`,
    transform: "translateY(-50%)",
  },
});

const styles = stylex.create({
  card: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
  container: {
    padding: spacing["10"],
    boxSizing: "border-box",
    width: "100%",
  },
  layout: {
    gap: spacing["8"],
  },
  listboxContainer: {
    minWidth: 200,
  },
  header: {
    paddingLeft: spacing["2"],
  },
  centeredPreviewArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  previewArea: {
    backgroundColor: uiColor.component2,
    borderColor: uiColor.border2,
    borderRadius: radius["lg"],
    borderStyle: "solid",
    borderWidth: 1,
    flexGrow: 1,
    minHeight: 300,
    overflow: "hidden",
    padding: spacing["4"],
    position: "relative",
  },
  previewBox: (
    animationName: unknown,
    duration: string,
    timingFunction: string,
  ) => ({
    animationDuration: duration,
    animationFillMode: "forwards",
    animationName,
    animationTimingFunction: timingFunction,
    backgroundColor: primaryColor.solid1,
    borderRadius: radius["md"],
    height: spacing["16"],
    width: spacing["32"],
  }),
  previewBoxLeftToRight: (
    animationName: unknown,
    duration: string,
    timingFunction: string,
  ) => ({
    animationDelay: animationDuration.default,
    animationDuration: duration,
    animationFillMode: "forwards",
    animationName: `${slideLeftToRight}, ${animationName as string}`,
    animationTimingFunction: timingFunction,
    backgroundColor: primaryColor.solid1,
    borderRadius: radius["md"],
    height: spacing["16"],
    left: spacing["4"],
    position: "absolute",
    transform: "translateY(-50%)",
    top: "50%",
    opacity: 0,
    width: spacing["32"],
  }),
});

const sortedDurations = Object.entries(animationDuration).filter(
  ([key]) => !key.startsWith("__"),
) as [string, string][];

const durationItems = sortedDurations.map(([key]) => ({
  id: key,
  name: key,
}));

export function AnimationDurations() {
  const [selectedKey, setSelectedKey] = useState<Key>(
    durationItems[0]?.id || "",
  );
  const [resetKey, setResetKey] = useState(0);

  const selectedDuration =
    sortedDurations.find(([key]) => key === selectedKey)?.[1] ||
    animationDuration.default;

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <Card style={styles.card}>
      <Flex direction="row" gap="4" style={styles.container}>
        <Flex direction="column" gap="2" style={styles.listboxContainer}>
          <Text weight="semibold" style={styles.header}>
            Duration
          </Text>
          <ListBox
            items={durationItems}
            selectedKeys={new Set([selectedKey])}
            onSelectionChange={(keys) => {
              const firstKey = keys === "all" ? null : Array.from(keys)[0];
              if (firstKey) setSelectedKey(firstKey);
            }}
            selectionMode="single"
          >
            {(item) => (
              <ListBoxItem key={item.id} id={item.id}>
                {item.name}
              </ListBoxItem>
            )}
          </ListBox>
          <Button onPress={handleReset} variant="secondary">
            Reset
          </Button>
        </Flex>
        <div {...stylex.props(styles.previewArea)}>
          <div
            key={`${selectedKey}-${resetKey}`}
            {...stylex.props(
              styles.previewBoxLeftToRight(
                animations.fadeIn,
                selectedDuration,
                animationTimingFunction.easeInOut,
              ),
            )}
          />
        </div>
      </Flex>
    </Card>
  );
}

const sortedTimingFunctions = Object.entries(animationTimingFunction).filter(
  ([key]) => !key.startsWith("__"),
) as [string, string][];

const timingFunctionItems = sortedTimingFunctions.map(([key]) => ({
  id: key,
  name: key,
}));

export function AnimationTimingFunctions() {
  const [selectedKey, setSelectedKey] = useState<Key>(
    timingFunctionItems[0]?.id || "",
  );
  const [resetKey, setResetKey] = useState(0);

  const selectedTimingFunction =
    sortedTimingFunctions.find(([key]) => key === selectedKey)?.[1] ||
    animationTimingFunction.easeInOut;

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <Card style={styles.card}>
      <Flex direction="row" gap="4" style={styles.container}>
        <Flex direction="column" gap="2" style={styles.listboxContainer}>
          <Text weight="semibold">Timing Function</Text>
          <ListBox
            items={timingFunctionItems}
            selectedKeys={new Set([selectedKey])}
            onSelectionChange={(keys) => {
              const firstKey = keys === "all" ? null : Array.from(keys)[0];
              if (firstKey) setSelectedKey(firstKey);
            }}
            selectionMode="single"
          >
            {(item) => (
              <ListBoxItem key={item.id} id={item.id}>
                {item.name}
              </ListBoxItem>
            )}
          </ListBox>
          <Button onPress={handleReset} variant="secondary">
            Reset
          </Button>
        </Flex>
        <div {...stylex.props(styles.previewArea, styles.centeredPreviewArea)}>
          <div
            key={`${selectedKey}-${resetKey}`}
            {...stylex.props(
              styles.previewBoxLeftToRight(
                animations.fadeIn,
                animationDuration.extremelySlow,
                selectedTimingFunction,
              ),
            )}
          />
        </div>
      </Flex>
    </Card>
  );
}

const animationList = Object.entries(animations).filter(
  ([key]) => !key.startsWith("__"),
) as [string, unknown][];

const animationItems = animationList.map(([key]) => ({
  id: key,
  name: key,
}));

export function AllAnimations() {
  const [selectedKey, setSelectedKey] = useState<Key>(
    animationItems[0]?.id || "",
  );
  const [resetKey, setResetKey] = useState(0);

  const selectedAnimation =
    animationList.find(([key]) => key === selectedKey)?.[1] ||
    animations.fadeIn;

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <Card style={styles.card}>
      <Flex direction="row" gap="4" style={styles.container}>
        <Flex direction="column" gap="2" style={styles.listboxContainer}>
          <Text weight="semibold">Animation</Text>
          <ListBox
            items={animationItems}
            selectedKeys={new Set([selectedKey])}
            onSelectionChange={(keys) => {
              const firstKey = keys === "all" ? null : Array.from(keys)[0];
              if (firstKey) setSelectedKey(firstKey);
            }}
            selectionMode="single"
          >
            {(item) => (
              <ListBoxItem key={item.id} id={item.id}>
                {item.name}
              </ListBoxItem>
            )}
          </ListBox>
          <Button onPress={handleReset} variant="secondary">
            Reset
          </Button>
        </Flex>
        <div {...stylex.props(styles.previewArea, styles.centeredPreviewArea)}>
          <div
            key={`${selectedKey}-${resetKey}`}
            {...stylex.props(
              styles.previewBox(
                selectedAnimation,
                animationDuration.extremelySlow,
                animationTimingFunction.easeInOut,
              ),
            )}
          />
        </div>
      </Flex>
    </Card>
  );
}
