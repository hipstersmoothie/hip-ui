import { OverlayTriggerProps } from "@react-types/overlays";
import {
  Menu as AriaMenu,
  MenuProps as AriaMenuProps,
  MenuContext,
  OverlayTriggerStateContext,
  Popover,
  PopoverContext,
  PopoverProps,
  Provider,
  RootMenuTriggerStateContext,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import {
  Children,
  cloneElement,
  createContext,
  use,
  useCallback,
  useRef,
  useState,
} from "react";
import { Size } from "../types";
import { gray } from "../theme/semantic-color.stylex";
import { SizeContext } from "../context";
import { useMenuTriggerState } from "react-stately";
import { AriaButtonProps, useMenuTrigger } from "react-aria";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  popover: {
    borderRadius: radius["md"],
    minWidth: spacing["40"],
    outline: "none",
    overflow: "auto",
    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
  },
  menu: {
    outline: "none",
  },
});

const ContextMenuTriggerProps = createContext<
  AriaButtonProps<"button"> & { ref?: React.Ref<HTMLDivElement> }
>({});

interface Position {
  x: number;
  y: number;
}

const ContextMenuStateContext = createContext<{
  position: Position;
  setPosition: (position: Position) => void;
}>({
  position: { x: 0, y: 0 },
  setPosition: () => {},
});

function ContextMenuRoot(
  props: OverlayTriggerProps & { children: React.ReactNode }
) {
  const state = useMenuTriggerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    {
      ...props,
      type: "menu",
    },
    state,
    ref
  );

  const scrollRef = useRef(null);

  return (
    <Provider
      values={[
        [MenuContext, { ...menuProps, ref: scrollRef }],
        [OverlayTriggerStateContext, state],
        [RootMenuTriggerStateContext, state],
        [ContextMenuTriggerProps, { ...menuTriggerProps, ref }],
        [ContextMenuStateContext, { position, setPosition }],
        [
          PopoverContext,
          {
            trigger: "MenuTrigger",
            triggerRef: ref,
            scrollRef,
            placement: "bottom start",
            "aria-labelledby": menuProps["aria-labelledby"],
          },
        ],
      ]}
    >
      {props.children}
    </Provider>
  );
}

function ContextMenuTrigger(
  props: OverlayTriggerProps & { children: React.ReactNode }
) {
  const overlayTriggerState = use(OverlayTriggerStateContext);
  const menuTriggerProps = use(ContextMenuTriggerProps);
  const { position, setPosition } = use(ContextMenuStateContext);
  const onContextMenu = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      overlayTriggerState?.open();
      setPosition({ x: e.clientX, y: e.clientY });
    },
    [menuTriggerProps, overlayTriggerState, setPosition]
  );

  if (Children.count(props.children) !== 1) {
    throw new Error("ContextMenuTrigger must have exactly one child");
  }

  return (
    <>
      {cloneElement(
        props.children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
        {
          "aria-controls": menuTriggerProps["aria-controls"],
          "aria-expanded": menuTriggerProps["aria-expanded"],
          "aria-haspopup": menuTriggerProps["aria-haspopup"],
          id: menuTriggerProps["id"],
          onContextMenu: onContextMenu,
        }
      )}
      <div
        ref={menuTriggerProps.ref}
        style={{
          position: "absolute",
          top: position?.y,
          left: position?.x,
        }}
      />
    </>
  );
}

export interface ContextMenuProps<T extends object>
  extends OverlayTriggerProps,
    Omit<AriaMenuProps<T>, "children" | "className" | "style">,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    > {
  trigger: React.ReactNode;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
}

export function ContextMenu<T extends object>({
  trigger,
  size = "md",
  defaultOpen,
  isOpen,
  onOpenChange,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  ...props
}: ContextMenuProps<T>) {
  return (
    <SizeContext.Provider value={size}>
      <ContextMenuRoot
        defaultOpen={defaultOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ContextMenuTrigger>{trigger}</ContextMenuTrigger>
        <Popover
          containerPadding={8}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          shouldFlip={shouldFlip}
          shouldUpdatePosition={shouldUpdatePosition}
          placement={placement}
          {...stylex.props(
            styles.popover,
            gray.bgSubtle,
            gray.text,
            gray.border
          )}
        >
          <AriaMenu {...props} {...stylex.props(styles.menu)} />
        </Popover>
      </ContextMenuRoot>
    </SizeContext.Provider>
  );
}
