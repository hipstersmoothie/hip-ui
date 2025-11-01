import type {
  CheckboxProps as AriaCheckboxProps,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Check, Minus } from "lucide-react";
import { use } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Flex } from "../flex";
import { Description, FieldErrorMessage, Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { ui, primary } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, lineHeight } from "../theme/typography.stylex";

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
  extends StyleXComponentProps<Omit<AriaCheckboxGroupProps, "children">> {
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
  size: sizeProp,
  style,
  ...props
}: CheckboxGroupProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaCheckboxGroup {...props} {...stylex.props(styles.group, style)}>
        <Label>{label}</Label>
        <Flex direction="column" gap="2">
          {children}
        </Flex>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </AriaCheckboxGroup>
    </SizeContext>
  );
}

export interface CheckboxProps
  extends StyleXComponentProps<Omit<AriaCheckboxProps, "children">> {
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
                ? [ui.bgSolid, ui.border, styles.checked]
                : isSelected
                  ? [primary.bgSolid, primary.borderInteractive, styles.checked]
                  : [ui.borderInteractive],
            )}
          >
            {isIndeterminate ? (
              <Minus size={16} />
            ) : isSelected ? (
              <Check size={16} />
            ) : null}
          </div>
          {children != null && (
            <Flex direction="column" gap="1">
              {children}
            </Flex>
          )}
        </>
      )}
    </AriaCheckbox>
  );
}
