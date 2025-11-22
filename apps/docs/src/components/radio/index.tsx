import type {
  RadioProps as AriaRadioProps,
  RadioGroupProps as AriaRadioGroupProps,
  ValidationResult,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  SelectionIndicator,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Flex } from "../flex";
import { Description, FieldErrorMessage, Label } from "../label";
import { animationDuration } from "../theme/animations.stylex";
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
    gap: spacing["2.5"],
    alignItems: {
      default: "center",
      ":has(p)": "flex-start",
    },
    display: "flex",
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
    position: "relative",
    height: spacing["4"],
    width: spacing["4"],

    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color, border-color, color",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionTimingFunction: "ease-in-out",
  },
  selectionIndicator: {
    borderRadius: radius["full"],
    backgroundColor: "white",
    height: spacing["2"],
    width: spacing["2"],

    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",

    animationDuration: animationDuration.fast,
    animationFillMode: "forwards",
    animationName: {
      default: scaleIn,
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    animationTimingFunction: "ease-in-out",
  },
  checked: {
    color: "white",
  },
  group: {
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
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
  size: sizeProp,
  style,
  ...props
}: RadioGroupProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaRadioGroup {...props} {...stylex.props(styles.group, style)}>
        <Label>{label}</Label>
        <Flex direction="column" gap="2">
          {children}
        </Flex>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </AriaRadioGroup>
    </SizeContext>
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
