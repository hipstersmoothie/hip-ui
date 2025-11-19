"use client";

import { useControlledState } from "@react-stately/utils";
import * as stylex from "@stylexjs/stylex";
import { createContext, use, useId, useRef, useState } from "react";
import { mergeProps, useHover, useKeyboard } from "react-aria";
import {
  Button as AriaButton,
  DialogTrigger,
  Menu as AriaMenu,
  Popover,
  ButtonProps,
  Toolbar,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Flex } from "../flex";
import { animationDuration } from "../theme/animations.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize } from "../theme/typography.stylex";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { radius } from "../theme/radius.stylex";

const OpenContext = createContext<string>("");
const SetOpenContext = createContext<(value: string) => void>(() => {});

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: spacing["1"],
  },
  item: {
    position: "relative",
  },
  button: {
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":is([data-hovered])": uiColor.component1,
      ":is([data-pressed])": uiColor.component2,
    },
    borderColor: "transparent",
    borderRadius: {
      default: radius["sm"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    fontSize: {
      ":is([data-size=sm] *)": fontSize["xs"],
      ":is([data-size=md] *)": fontSize["sm"],
      ":is([data-size=lg] *)": fontSize["base"],
    },
    gap: spacing["1"],
    height: {
      ":is([data-size=sm] *)": spacing["6"],
      ":is([data-size=md] *)": spacing["8"],
      ":is([data-size=lg] *)": spacing["10"],
    },
    justifyContent: "center",
    opacity: {
      default: 1,
      ":is([disabled])": 0.3,
    },
    paddingLeft: {
      ":is([data-size=sm] *)": spacing["2"],
      ":is([data-size=md] *)": spacing["2.5"],
      ":is([data-size=lg] *)": spacing["3"],
    },
    paddingRight: {
      ":is([data-size=sm] *)": spacing["2"],
      ":is([data-size=md] *)": spacing["2.5"],
      ":is([data-size=lg] *)": spacing["3"],
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
  },
});

export interface MenubarProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  size?: Size;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Menubar({
  style,
  size: sizeProp,
  value: valueProp,
  defaultValue,
  onValueChange: onValueChangeProp,
  ...props
}: MenubarProps) {
  const size = sizeProp || use(SizeContext);
  const [value, onValueChange] = useControlledState(
    valueProp,
    defaultValue ?? "",
    onValueChangeProp,
  );

  return (
    <SizeContext value={size}>
      <OpenContext value={value}>
        <SetOpenContext value={onValueChange}>
          <Toolbar
            // Lets the toolbar be interactive when any item is open
            data-react-aria-top-layer={value || undefined}
            data-size={size}
            {...stylex.props(styles.container, style)}
            {...props}
          />
        </SetOpenContext>
      </OpenContext>
    </SizeContext>
  );
}

export interface MenubarItemProps
  extends StyleXComponentProps<React.ComponentProps<"div">>,
    Pick<ButtonProps, "isDisabled"> {
  label: string;
}

export function MenubarItem({
  style,
  label,
  children,
  isDisabled,
  id: idProp,
  ...props
}: MenubarItemProps) {
  const genId = useId();
  const id = idProp || genId;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverStyles = usePopoverStyles();
  const isAnyOpen = use(OpenContext);
  const setIsAnyOpen = use(SetOpenContext);
  const [isOpen, setIsOpen] = useState(false);
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === "ArrowDown") {
        setIsAnyOpen(id);
        setIsOpen(true);
        e.preventDefault();
      }
      if (e.key === "ArrowUp") {
        setIsOpen(false);
        setIsAnyOpen("");
        e.preventDefault();
      }
    },
  });
  const { hoverProps } = useHover({
    onHoverStart: () => {
      if (!isAnyOpen) return;

      setIsAnyOpen(id);
      setIsOpen(true);
    },
  });

  if (isAnyOpen && isOpen && id !== isAnyOpen) {
    setIsOpen(false);
  }

  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        setIsAnyOpen(open ? id : "");
      }}
    >
      <Flex direction="column" style={[styles.item, style]} {...props}>
        <AriaButton
          id={id}
          ref={buttonRef}
          isDisabled={isDisabled}
          {...stylex.props(styles.button)}
          {...(mergeProps(hoverProps, keyboardProps) as ButtonProps)}
        >
          {label}
        </AriaButton>
        <Popover
          placement="bottom start"
          containerPadding={8}
          offset={8}
          aria-labelledby={id}
          {...stylex.props(popoverStyles.wrapper, popoverStyles.animation)}
        >
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onKeyDown={(e) => {
              if (
                ["ArrowRight", "ArrowLeft"].includes(e.key) &&
                !e.defaultPrevented
              ) {
                e.preventDefault();

                if (buttonRef.current) {
                  buttonRef.current.closest("[role=toolbar]")?.dispatchEvent(
                    new KeyboardEvent("keydown", {
                      key: e.key,
                    }),
                  );
                  buttonRef.current.closest("[role=toolbar]")?.dispatchEvent(
                    new KeyboardEvent("keydown", {
                      key: e.key,
                    }),
                  );
                  document.activeElement?.closest("button")?.click();
                }
              }
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <AriaMenu autoFocus>{children}</AriaMenu>
          </div>
        </Popover>
      </Flex>
    </DialogTrigger>
  );
}
