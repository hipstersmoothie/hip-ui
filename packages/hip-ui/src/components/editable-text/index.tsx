"use client";

import { useControlledState } from "@react-stately/utils";
import * as stylex from "@stylexjs/stylex";
import {
  useRef,
  useState,
  KeyboardEvent,
  useEffect,
  useEffectEvent,
} from "react";
import { mergeProps, useLongPress } from "react-aria";
import { Input, TextField as AriaTextField } from "react-aria-components";

import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const focusClosestFocusableElement = () => {
  const focusableElements = document.activeElement?.parentElement?.closest(
    "button, input, textarea, select, a, [tabindex]:not([tabindex='-1'])",
  );
  if (!focusableElements) return;
  (focusableElements as HTMLElement).focus();
};

const styles = stylex.create({
  input: {
    borderRadius: radius["sm"],
    borderWidth: 0,
    textDecoration: "inherit",
    backgroundColor: "transparent",
    display: "inline-block",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    textAlign: "inherit",
    textTransform: "inherit",
    minWidth: 0,

    outlineColor: "blue",
    outlineStyle: "solid",
    outlineWidth: {
      default: "0px",
      ":focus": "1px",
    },

    marginBottom: `calc(${spacing["1"]} * -1)`,
    marginLeft: `calc(${spacing["2"]} * -1)`,
    marginRight: `calc(${spacing["2"]} * -1)`,
    marginTop: `calc(${spacing["1"]} * -1)`,
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["1"],
  },
});

export interface EditableTextProps
  extends StyleXComponentProps<
    Omit<React.ComponentProps<"span">, "children" | "onChange">
  > {
  /**
   * The current value of the editable text.
   */
  children: string;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (value: string) => void;

  /**
   * Whether the component is read-only.
   */
  isReadOnly?: boolean;
  /**
   * Whether to show the input field on mount.
   */
  defaultEditing?: boolean;
  /**
   * Whether the component is currently in editing mode (controlled).
   */
  isEditing?: boolean;
  /**
   * Callback fired when the editing state changes.
   */
  onEditingChange?: (isEditing: boolean) => void;
}

export function EditableText({
  children,
  onChange,
  isReadOnly,
  defaultEditing,
  isEditing: isEditingProp,
  onEditingChange,
  style,
  ...props
}: EditableTextProps) {
  const [isEditingState, setIsEditingState] = useControlledState(
    isEditingProp,
    defaultEditing ?? false,
    onEditingChange,
  );
  const [editValue, setEditValue] = useState(children);
  const inputRef = useRef<HTMLInputElement>(null);

  const isEditing =
    isEditingProp === undefined ? isEditingState : isEditingProp;
  const setIsEditing = (newIsEditing: boolean) => {
    if (isEditingProp === undefined) {
      setIsEditingState(newIsEditing);
    }
    onEditingChange?.(newIsEditing);
  };

  const handleStartEditing = () => {
    if (isReadOnly) return;
    setEditValue(children);
    setIsEditing(true);
    // Focus the input after it's rendered
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  const handleCommit = (newValue: string) => {
    focusClosestFocusableElement();
    setIsEditing(false);
    if (newValue !== children) {
      onChange?.(newValue);
    }
  };

  const handleCancel = () => {
    focusClosestFocusableElement();
    setIsEditing(false);
    setEditValue(children);
  };

  const handleKeyDown = useEffectEvent((e: Event) => {
    const event = e as unknown as KeyboardEvent;

    if (event.key === "Enter") {
      e.preventDefault();
      handleCommit(editValue);
    } else if (event.key === "Escape") {
      e.preventDefault();
      handleCancel();
    }

    e.stopPropagation();
  });

  const handleBlur = () => {
    handleCommit(editValue);
  };

  const { longPressProps } = useLongPress({
    onLongPress: handleStartEditing,
  });

  useEffect(() => {
    if (!isEditing) return;

    globalThis.addEventListener("keydown", handleKeyDown, {
      capture: true,
    });
    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown, {
        capture: true,
      });
    };
  }, [isEditing]);

  if (isEditing) {
    return (
      <AriaTextField
        value={editValue}
        onChange={setEditValue}
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        isReadOnly={isReadOnly}
        {...stylex.props(style)}
      >
        <Input
          {...stylex.props(styles.input)}
          ref={inputRef}
          onBlur={handleBlur}
        />
      </AriaTextField>
    );
  }

  return <span {...mergeProps(props, longPressProps)}>{children}</span>;
}
