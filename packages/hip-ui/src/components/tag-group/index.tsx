import * as stylex from "@stylexjs/stylex";
import { X } from "lucide-react";
import {
  TagGroupProps as AriaTagGroupProps,
  TagGroup as AriaTagGroup,
  TagProps as AriaTagProps,
  Tag as AriaTag,
  TagListProps,
  TagList,
  Button,
} from "react-aria-components";

import { Description, ErrorMessage, Label } from "../label";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { typeramp } from "../theme/typography.stylex";

const styles = stylex.create({
  group: {
    gap: spacing["2"],
    display: "flex",
    flexDirection: "column",
  },
  list: {
    alignItems: "center",
    columnGap: spacing["1.5"],
    display: "flex",
    flexWrap: "wrap",
    rowGap: spacing["2.5"],
  },
  tag: {
    borderColor: {
      default: uiColor.border2,
      ":is([data-hovered])": uiColor.border3,
      ":is([data-selected])": primaryColor.border3,
    },
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: 1,
    gap: spacing["1.5"],
    alignItems: "center",
    backgroundColor: {
      default: uiColor.component1,
      ":is([data-hovered])": uiColor.component2,
      ":is([data-pressed])": uiColor.component3,
      ":is([data-selected])": primaryColor.component1,
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered])": uiColor.text2,
      ":is([data-selected])": primaryColor.text2,
    },
    cursor: "default",
    display: "flex",
    justifyContent: "center",
    opacity: {
      ":is([data-disabled])": 0.5,
    },
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2.5"],
    paddingRight: {
      default: spacing["2.5"],
      ":has(button)": spacing["1.5"],
    },
    paddingTop: spacing["1"],
  },
  removeButton: {
    margin: 0,
    padding: 0,
    borderRadius: radius.full,
    borderWidth: 0,
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":hover": uiColor.component2,
      ":active": uiColor.component3,
    },
    color: {
      default: uiColor.text1,
      ":hover": uiColor.text2,
    },
    display: "flex",
    justifyContent: "center",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionTimingFunction: "ease-in-out",
    height: spacing["4"],
    width: spacing["4"],
  },
});

interface TagGroupBaseProps<T>
  extends StyleXComponentProps<Omit<AriaTagGroupProps, "children">>,
    Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function TagGroup<T extends object>({
  children,
  style,
  label,
  items,
  renderEmptyState,
  description,
  errorMessage,
  ...props
}: TagGroupBaseProps<T>) {
  return (
    <AriaTagGroup {...props} {...stylex.props(styles.group, style)}>
      {label != null && <Label>{label}</Label>}
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
        {...stylex.props(styles.list)}
      >
        {children}
      </TagList>
      {description && (
        <Description slot="description">{description}</Description>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </AriaTagGroup>
  );
}

export interface TagProps
  extends StyleXComponentProps<Omit<AriaTagProps, "children">> {
  children?: React.ReactNode;
}

export function Tag({ children, style, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      {...stylex.props(styles.tag, typeramp.label, style)}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" {...stylex.props(styles.removeButton)}>
              <X size={12} />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
