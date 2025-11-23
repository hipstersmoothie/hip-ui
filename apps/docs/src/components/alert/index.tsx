"use client";

import * as stylex from "@stylexjs/stylex";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  X,
  AlertTriangle,
} from "lucide-react";
import { use } from "react";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { radius } from "../theme/radius.stylex";
import {
  critical,
  primary,
  success,
  warning,
} from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily } from "../theme/typography.stylex";
import { Text } from "../typography/text";

const styles = stylex.create({
  alert: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    borderStyle: "solid",
    borderWidth: 1,
    gap: spacing["2.5"],
    gridTemplateAreas: {
      default: "'icon content'",
      "@media (max-width: 640px)": "'icon content'",
    },
    alignItems: "center",
    boxSizing: "border-box",
    display: "grid",
    fontFamily: fontFamily["sans"],
    gridTemplateColumns: {
      default: "auto 1fr",
      "@media (max-width: 640px)": "auto 1fr",
    },
    position: "relative",
    minHeight: spacing["10"],
    paddingBottom: spacing["2.5"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["2.5"],
  },
  alertWithDescription: {
    alignItems: "flex-start",
    paddingBottom: spacing["4"],
    paddingRight: spacing["3"],
    paddingTop: spacing["4"],
  },
  alertWithClose: {
    gridTemplateAreas: {
      default: "'icon content close'",
      "@media (max-width: 640px)": "'icon content close'",
    },
    gridTemplateColumns: {
      default: "auto 1fr auto",
      "@media (max-width: 640px)": "auto 1fr auto",
    },
    paddingRight: spacing["2"],
  },
  alertWithAction: {
    gridTemplateAreas: {
      default: "'icon content action'",
      "@media (max-width: 640px)": "'icon content' 'action action action'",
    },
    gridTemplateColumns: {
      default: "auto 1fr auto",
      "@media (max-width: 640px)": "auto 1fr",
    },
    paddingRight: spacing["2"],
  },
  alertWithActionAndClose: {
    gridTemplateAreas: {
      default: "'icon content action close'",
      "@media (max-width: 640px)":
        "'icon content close' 'action action action'",
    },
    gridTemplateColumns: {
      default: "auto 1fr auto auto",
      "@media (max-width: 640px)": "auto 1fr auto",
    },
    paddingRight: spacing["2"],
  },
  content: {
    gridArea: "content",
    gap: spacing["1"],
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    gridArea: "icon",
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    pointerEvents: "none",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["5"],
      width: spacing["5"],
    },
  },
  action: {
    gridArea: "action",
    gap: spacing["2"],
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexShrink: 0,
  },
  closeButton: {
    gridArea: "close",
    flexShrink: 0,
    marginBottom: `calc(${spacing["1"]} * -1)`,
    marginTop: `calc(${spacing["1"]} * -1)`,
  },
  actionAndClose: {
    alignSelf: "center",
  },
});

export type AlertVariant = "info" | "success" | "warning" | "critical";

export interface AlertProps
  extends Omit<StyleXComponentProps<React.ComponentProps<"div">>, "title"> {
  /**
   * The variant of the alert.
   * @default "info"
   */
  variant?: AlertVariant;
  /**
   * The size of the alert.
   */
  size?: Size;
  /**
   * The title of the alert.
   */
  title?: React.ReactNode;
  /**
   * The description or content of the alert.
   */
  children?: React.ReactNode;
  /**
   * Action elements to display in the alert (e.g., buttons).
   */
  action?: React.ReactNode;
  /**
   * Callback fired when the alert is dismissed. If provided, a close button will be displayed.
   */
  onDismiss?: () => void;
  /**
   * Custom icon to display. If not provided, a default icon will be used based on the variant.
   */
  icon?: React.ReactNode;
}

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: <Info />,
  success: <CheckCircle2 />,
  warning: <AlertTriangle />,
  critical: <AlertCircle />,
};

export const Alert = ({
  variant = "info",
  size: sizeProp,
  title,
  children,
  action,
  onDismiss,
  icon,
  style,
  ...props
}: AlertProps) => {
  const size = sizeProp ?? use(SizeContext);

  const defaultIcon = defaultIcons[variant];
  const displayIcon = icon === undefined ? defaultIcon : icon;
  const hasAction = action != null;
  const hasCloseButton = onDismiss != null;

  return (
    <div
      role="alert"
      data-variant={variant}
      data-size={size}
      {...stylex.props(
        styles.alert,
        !hasAction && hasCloseButton && styles.alertWithClose,
        hasAction && hasCloseButton && styles.alertWithActionAndClose,
        hasAction && !hasCloseButton && styles.alertWithAction,
        children != null && styles.alertWithDescription,
        variant === "info" && [primary.bgDim, primary.borderDim, primary.text],
        variant === "success" && [
          success.bgDim,
          success.borderDim,
          success.text,
        ],
        variant === "warning" && [
          warning.bgDim,
          warning.borderDim,
          warning.text,
        ],
        variant === "critical" && [
          critical.bgDim,
          critical.borderDim,
          critical.text,
        ],
        style,
      )}
      {...props}
    >
      {displayIcon != null && (
        <div {...stylex.props(styles.icon)}>{displayIcon}</div>
      )}
      <div {...stylex.props(styles.content)}>
        {title != null && (
          <Text size="base" weight="semibold">
            {title}
          </Text>
        )}
        {children != null && (
          <Text size="sm" variant="secondary" data-alert-description>
            {children}
          </Text>
        )}
      </div>
      {hasAction && <div {...stylex.props(styles.action)}>{action}</div>}
      {hasCloseButton && (
        <IconButton
          aria-label="Dismiss alert"
          size={size}
          variant="tertiary"
          onPress={onDismiss}
          style={[styles.closeButton, hasAction && styles.actionAndClose]}
        >
          <X />
        </IconButton>
      )}
    </div>
  );
};
