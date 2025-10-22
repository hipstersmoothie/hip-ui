"use client";

import * as stylex from "@stylexjs/stylex";
import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
  DropItem,
  DropZone,
  DropZoneProps,
} from "react-aria-components";

import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Text } from "../typography/text";

async function getFiles(items: DropItem[]): Promise<File[]> {
  return Promise.all(
    items.filter((item) => item.kind === "file").map((item) => item.getFile()),
  );
}

const styles = stylex.create({
  dropZone: {
    backgroundColor: {
      default: uiColor.bgSubtle,
      ":is([data-drop-target])": primaryColor.component1,
    },
    borderColor: {
      default: uiColor.border2,
      ":is([data-drop-target])": primaryColor.solid1,
    },
    borderRadius: radius.md,
    borderStyle: {
      default: "dashed",
      ":is([data-drop-target])": "solid",
    },
    borderWidth: 1,
    boxSizing: "border-box",
    padding: spacing["2"],

    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
  },
});

interface FileDropZoneProps
  extends Omit<AriaFileTriggerProps, "className" | "style">,
    Pick<DropZoneProps, "isDisabled"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  onAddFiles?: (files: File[]) => void;
}

export const FileDropZone = ({
  children,
  style,
  onAddFiles,
  isDisabled,
  acceptedFileTypes,
  ...props
}: FileDropZoneProps) => {
  return (
    <DropZone
      {...stylex.props(styles.dropZone, style)}
      isDisabled={isDisabled}
      onDrop={(e) => {
        void getFiles(e.items).then((files) => {
          onAddFiles?.(files);
        });
      }}
      getDropOperation={(types) => {
        if (!acceptedFileTypes) return "copy";
        return acceptedFileTypes.some((type) => types.has(type))
          ? "copy"
          : "cancel";
      }}
    >
      {({ isDropTarget }) => {
        if (isDropTarget) {
          return (
            <Text
              size="xs"
              variant="secondary"
              weight="medium"
              style={styles.message}
            >
              Drop to upload
            </Text>
          );
        }

        return (
          <AriaFileTrigger
            {...props}
            acceptedFileTypes={acceptedFileTypes}
            onSelect={(files) => {
              // eslint-disable-next-line unicorn/prefer-spread
              onAddFiles?.(Array.from(files ?? []));
            }}
          >
            {children}
          </AriaFileTrigger>
        );
      }}
    </DropZone>
  );
};
