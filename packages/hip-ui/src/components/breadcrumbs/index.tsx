import * as stylex from "@stylexjs/stylex";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbsProps as AriaBreadcrumbsProps,
  Breadcrumb as AriaBreadcrumb,
  BreadcrumbProps as AriaBreadcrumbProps,
} from "react-aria-components";

import { uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  breadcrumbs: {
    margin: 0,
    padding: 0,
    gap: spacing["1"],
    listStyle: "none",
    alignItems: "center",
    display: "flex",
  },
  breadcrumb: {
    gap: spacing["1"],
    alignItems: "center",
    color: {
      default: uiColor.text2,
      ":is([data-current])": uiColor.text1,
    },
    display: "flex",
    fontWeight: {
      default: fontWeight.normal,
      ":is([data-current])": fontWeight.medium,
    },
  },
  separator: {
    alignItems: "center",
    color: uiColor.text2,
    display: {
      default: "flex",
      ":is([data-breadcrumb]:last-child *)": "none",
    },
    opacity: {
      ":is([data-disabled])": 0.5,
    },
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
});

export interface BreadcrumbsProps<T extends object = object>
  extends StyleXComponentProps<Omit<AriaBreadcrumbsProps<T>, "children">> {
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export interface BreadcrumbProps
  extends StyleXComponentProps<Omit<AriaBreadcrumbProps, "children">> {
  children?: React.ReactNode;
}

export function Breadcrumbs<T extends object = object>({
  style,
  isDisabled,
  ...props
}: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      data-disabled={isDisabled ? "" : undefined}
      {...stylex.props(
        styles.breadcrumbs,
        isDisabled && styles.disabled,
        style,
      )}
    />
  );
}

export function Breadcrumb({ style, ...props }: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      {...stylex.props(styles.breadcrumb, style)}
      data-breadcrumb
    >
      {props.children}
      <ChevronRight
        size={16}
        aria-hidden="true"
        {...stylex.props(styles.separator)}
      />
    </AriaBreadcrumb>
  );
}
