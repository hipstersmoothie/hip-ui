import {
  ListBoxProps as AriaListBoxProps,
  ListBoxItem as AriaListBoxItem,
  ListBox as AriaListBox,
  ListBoxSection as AriaListBoxSection,
  ListBoxSectionProps as AriaListBoxSectionProps,
  ListBoxItemProps as AriaListBoxItemProps,
  Header,
  SeparatorProps,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Check } from "lucide-react";
import { spacing } from "../theme/spacing.stylex";
import { plum, slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import { fontWeight, typeramp } from "../theme/typography.stylex";
import { Size } from "../types";
import { SizeContext } from "../context";
import { use, useContext } from "react";
import { Separator } from "../separator";
import { gray } from "../theme/semantic-color.stylex";

const styles = stylex.create({
  listBox: {
    outline: "none",
  },
  item: {
    display: "flex",
    userSelect: "none",

    boxSizing: "border-box",
    fontWeight: fontWeight["medium"],
    outline: {
      default: "none",
      ":focus": "none",
    },
    padding: spacing["1"],
  },
  sm: {
    height: spacing["9"],
  },
  md: {
    height: spacing["9"],
  },
  lg: {
    height: spacing["11"],
  },
  itemInner: {
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      [":is(:hover > *)"]: slate[4],
      [":is(:active > *)"]: slate[5],
    },
    borderRadius: radius["md"],
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,
    gap: spacing["2"],
    justifyContent: "space-between",
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    transitionDuration: "100ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  check: {
    color: plum[9],
  },
  section: {},
  sectionLabel: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    paddingBottom: spacing["1"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["1"],
  },
  smSectionLabel: {
    height: spacing["7"],
  },
  mdSectionLabel: {
    height: spacing["7"],
  },
  lgSectionLabel: {
    height: spacing["9"],
  },
  separator: {
    marginBottom: spacing["1.5"],
    marginTop: spacing["1.5"],
  },
});

export interface ListBoxProps<T extends object>
  extends Omit<AriaListBoxProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  size?: Size;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ListBox<T extends object>({
  size: sizeProp,
  style,
  ...props
}: ListBoxProps<T>) {
  const size = sizeProp || use(SizeContext) || "md";

  return (
    <SizeContext.Provider value={size}>
      <AriaListBox {...stylex.props(styles.listBox, style)} {...props} />
    </SizeContext.Provider>
  );
}

export interface ListBoxItemProps
  extends Omit<AriaListBoxItemProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function ListBoxItem({ style, children, ...props }: ListBoxItemProps) {
  const size = useContext(SizeContext);

  console.log("size", { size });
  return (
    <AriaListBoxItem
      {...props}
      {...stylex.props(typeramp.label, styles.item, styles[size], style)}
    >
      {({ isSelected }) => (
        <div {...stylex.props(styles.itemInner)}>
          {children}
          {isSelected && <Check size={16} {...stylex.props(styles.check)} />}
        </div>
      )}
    </AriaListBoxItem>
  );
}

export interface ListBoxSectionProps<T extends object>
  extends Omit<AriaListBoxSectionProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function ListBoxSection<T extends object>({
  style,
  ...props
}: ListBoxSectionProps<T>) {
  return (
    <AriaListBoxSection {...props} {...stylex.props(styles.section, style)} />
  );
}

export interface ListBoxSeparatorProps
  extends Omit<SeparatorProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function ListBoxSeparator({ style, ...props }: ListBoxSeparatorProps) {
  return <Separator {...props} style={styles.separator} />;
}

export interface ListBoxSectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function ListBoxSectionHeader({
  style,
  ...props
}: ListBoxSectionHeaderProps) {
  const size = useContext(SizeContext);
  return (
    <Header
      {...props}
      {...stylex.props(
        typeramp.sublabel,
        styles.sectionLabel,
        gray.textDim,
        styles[`${size}SectionLabel`],
        style
      )}
    />
  );
}
