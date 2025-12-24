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

import { Button } from "../button";
import { IconButton } from "../icon-button";
import {
  criticalColor,
  successColor,
  uiColor,
  warningColor,
} from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { lineHeight, typeramp } from "../theme/typography.stylex";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { toasts, ToastContentType } from "./queue";

const styles = stylex.create({
  region: {
    gap: spacing["2"],
    outline: "none",
    display: "flex",
    flexDirection: "column-reverse",
    position: "fixed",
    zIndex: 9999,
    bottom: spacing["4"],
    right: spacing["4"],
  },
  toast: {
    gap: spacing["4"],
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: spacing["60"],
    paddingBottom: spacing["3"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["3"],
  },
  content: {
    flex: "1 1 auto",
    gap: spacing["2.5"],
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  title: {
    color: {
      default: uiColor.text1,
      ":is([data-variant=critical] *)": criticalColor.textContrast,
      ":is([data-variant=success] *)": successColor.textContrast,
      ":is([data-variant=warning] *)": warningColor.text2,
    },
    fontWeight: 600,
    lineHeight: lineHeight["none"],
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
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      color: {
        ":is([data-variant=critical] *)": criticalColor.solid1,
        ":is([data-variant=success] *)": successColor.solid1,
        ":is([data-variant=warning] *)": warningColor.solid1,
      },
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },
  },
  critical: {
    borderColor: criticalColor.border2,
    backgroundColor: criticalColor.component1,
    color: criticalColor.text2,
  },
  success: {
    borderColor: successColor.border2,
    backgroundColor: successColor.component1,
    color: successColor.text2,
  },
  warning: {
    borderColor: warningColor.border2,
    backgroundColor: warningColor.component1,
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
      {Boolean(toast.content.icon) && (
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

export interface ToastRegionProps extends StyleXComponentProps<
  Omit<AriaToastRegionProps<ToastContentType>, "children" | "queue">
> {}

export function ToastRegion({ style, ...props }: ToastRegionProps) {
  return (
    <AriaToastRegion
      queue={toasts}
      {...props}
      {...stylex.props(styles.region, style)}
    >
      {({ toast }) => <ToastItem toast={toast} />}
    </AriaToastRegion>
  );
}
