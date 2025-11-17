"use client";

import * as stylex from "@stylexjs/stylex";
import { X } from "lucide-react";
import {
  UNSTABLE_ToastRegion as AriaToastRegion,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  ToastRegionProps as AriaToastRegionProps,
  Text,
  QueuedToast,
} from "react-aria-components";

import { IconButton } from "../icon-button";
import {
  criticalColor,
  successColor,
  uiColor,
  warningColor,
} from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { lineHeight, typeramp } from "../theme/typography.stylex";
import { toasts, ToastContentType } from "./queue";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { Button } from "../button";

const styles = stylex.create({
  region: {
    bottom: spacing["4"],
    display: "flex",
    flexDirection: "column-reverse",
    gap: spacing["2"],
    outline: "none",
    position: "fixed",
    right: spacing["4"],
    zIndex: 9999,
  },
  toast: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["3"],
    paddingBottom: spacing["3"],
    minWidth: spacing["60"],
  },
  content: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    gap: spacing["2.5"],
    minWidth: 0,
  },
  title: {
    fontWeight: 600,
    lineHeight: lineHeight["none"],
    color: {
      default: uiColor.text1,
      ":is([data-variant=critical] *)": criticalColor.textContrast,
      ":is([data-variant=success] *)": successColor.textContrast,
      ":is([data-variant=warning] *)": warningColor.text2,
    },
  },
  description: {
    color: {
      default: uiColor.text1,
      ":is([data-variant=critical] *)": criticalColor.text1,
      ":is([data-variant=success] *)": successColor.text1,
      ":is([data-variant=warning] *)": warningColor.text1,
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
      color: {
        ":is([data-variant=critical] *)": criticalColor.solid1,
        ":is([data-variant=success] *)": successColor.solid1,
        ":is([data-variant=warning] *)": warningColor.solid1,
      },
    },
  },
  critical: {
    backgroundColor: criticalColor.component1,
    borderColor: criticalColor.border2,
    color: criticalColor.text2,
  },
  success: {
    backgroundColor: successColor.component1,
    borderColor: successColor.border2,
    color: successColor.text2,
  },
  warning: {
    backgroundColor: warningColor.component1,
    borderColor: warningColor.border2,
    color: warningColor.text2,
  },
});

function ToastItem({ toast }: { toast: QueuedToast<ToastContentType> }) {
  const popoverStyles = usePopoverStyles();

  return (
    <Toast
      toast={toast}
      data-variant={toast.content.variant}
      {...stylex.props(
        popoverStyles.wrapper,
        styles.toast,
        toast.content.variant === "critical" && styles.critical,
        toast.content.variant === "success" && styles.success,
        toast.content.variant === "warning" && styles.warning,
      )}
    >
      {toast.content.icon && (
        <div {...stylex.props(styles.icon)}>{toast.content.icon}</div>
      )}
      <ToastContent {...stylex.props(styles.content)}>
        <Text slot="title" {...stylex.props(typeramp.body, styles.title)}>
          {toast.content.title}
        </Text>
        <Text
          slot="description"
          {...stylex.props(styles.description, typeramp.label)}
        >
          {toast.content.description}
        </Text>
      </ToastContent>
      {toast.content.action ? (
        <Button
          size="sm"
          variant={toast.content.action.variant}
          onPress={() => {
            toast.content.action?.onPress();
            toasts.close(toast.key);
          }}
        >
          {toast.content.action.label}
        </Button>
      ) : (
        <IconButton
          aria-label="Close"
          size="sm"
          variant="tertiary"
          slot="close"
        >
          <X />
        </IconButton>
      )}
    </Toast>
  );
}

export interface ToastRegionProps
  extends StyleXComponentProps<
    Omit<AriaToastRegionProps<ToastContentType>, "children" | "queue">
  > {}

export function ToastRegion({ style, ...props }: ToastRegionProps) {
  return (
    <AriaToastRegion
      queue={toasts}
      {...stylex.props(styles.region, style)}
      {...props}
    >
      {({ toast }) => <ToastItem toast={toast} />}
    </AriaToastRegion>
  );
}
