import type {
  RadioProps as AriaRadioProps,
  RadioGroupProps as AriaRadioGroupProps,
  ValidationResult,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  FieldError,
  SelectionIndicator,
} from "react-aria-components";

import { Flex } from "../flex";
import { Description, Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { ui, primary } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, lineHeight } from "../theme/typography.stylex";

const scaleIn = stylex.keyframes({
  "0%": {
    transform: "translate(-50%, -50%) scale(0)",
  },
  "100%": {
    transform: "translate(-50%, -50%) scale(1)",
  },
});

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
  radio: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    borderRadius: radius["full"],
    borderWidth: 2,
    height: spacing["4"],
    position: "relative",
    width: spacing["4"],

    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color, color",
    transitionTimingFunction: "ease-in-out",
  },
  selectionIndicator: {
    backgroundColor: "white",
    borderRadius: radius["full"],
    height: spacing["2"],
    width: spacing["2"],

    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",

    animationDuration: "100ms",
    animationFillMode: "forwards",
    animationName: scaleIn,
    animationTimingFunction: "ease-in-out",
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

interface RadioGroupProps
  extends StyleXComponentProps<Omit<AriaRadioGroupProps, "children">> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  size,
  style,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} {...stylex.props(styles.group, style)}>
      {label != null && <Label size={size}>{label}</Label>}
      <Flex direction="column" gap="2">
        {children}
      </Flex>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

export interface RadioProps
  extends StyleXComponentProps<Omit<AriaRadioProps, "children">> {
  children?: React.ReactNode;
}

export function Radio({ children, style, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} {...stylex.props(styles.wrapper, style)}>
      {({ isSelected, isDisabled }) => (
        <>
          <div
            {...stylex.props(
              styles.radio,
              isDisabled
                ? [ui.bgSolid, ui.border, styles.checked]
                : isSelected
                  ? [primary.bgSolid, primary.borderInteractive, styles.checked]
                  : [ui.borderInteractive],
            )}
          >
            <SelectionIndicator {...stylex.props(styles.selectionIndicator)} />
          </div>
          <Flex direction="column" gap="1">
            {children}
          </Flex>
        </>
      )}
    </AriaRadio>
  );
}
