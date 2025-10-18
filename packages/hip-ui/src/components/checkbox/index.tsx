import type {
  CheckboxProps as AriaCheckboxProps,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  FieldError,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Check, Minus } from "lucide-react";

import { spacing } from "../theme/spacing.stylex";
import { radius } from "../theme/radius.stylex";
import { gray, primary } from "../theme/semantic-color.stylex";
import { fontFamily, fontSize, lineHeight } from "../theme/typography.stylex";
import { Flex } from "../flex";
import { Description, Label } from "../label";
import { Size } from "../types";

const styles = stylex.create({
  wrapper: {
    alignItems: {
      default: "center",
      ":has(p)": "flex-start",
    },
    display: "flex",
    gap: spacing["2.5"],

    fontFamily: fontFamily["sans"],
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
    opacity: { ":is([data-disabled])": 0.5 },
  },
  checkbox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    borderRadius: radius["sm"],
    borderWidth: 2,
    height: spacing["4"],
    width: spacing["4"],
  },
  checked: {
    color: "white",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["3"],
  },
});

interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "children" | "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
}

export function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  size,
  style,
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...props} {...stylex.props(styles.group, style)}>
      {label && <Label size={size}>{label}</Label>}
      <Flex direction="column" gap="2">
        {children}
      </Flex>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, "className" | "style" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children?: React.ReactNode;
}

export function Checkbox({ children, style, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props} {...stylex.props(styles.wrapper, style)}>
      {({ isIndeterminate, isSelected, isDisabled }) => (
        <>
          <div
            {...stylex.props(
              styles.checkbox,
              isDisabled
                ? [gray.bgSolid, gray.border, styles.checked]
                : isSelected
                  ? [primary.bgSolid, primary.borderInteractive, styles.checked]
                  : [gray.borderInteractive]
            )}
          >
            {isIndeterminate ? (
              <Minus size={16} />
            ) : isSelected ? (
              <Check size={16} />
            ) : null}
          </div>
          {children && (
            <Flex direction="column" gap="1">
              {children}
            </Flex>
          )}
        </>
      )}
    </AriaCheckbox>
  );
}
