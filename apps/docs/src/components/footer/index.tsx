"use client";

import type { LinkProps as AriaLinkProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Link as AriaLink } from "react-aria-components";

import type { StyleXComponentProps } from "../theme/types";

import { Button } from "../button";
import { TextField } from "../text-field";
import { animationDuration } from "../theme/animations.stylex";
import { uiColor } from "../theme/color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  root: {
    backgroundColor: uiColor.bgSubtle,
    boxSizing: "border-box",
    containerType: "inline-size",
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["sm"],
    width: "100%",
  },
  footerSectionWrapper: {
    borderTopColor: uiColor.border1,
    borderTopStyle: "solid",
    borderTopWidth: 1,
  },
  footerSection: {
    borderWidth: 0,
    gap: {
      default: spacing["8"],
      [containerBreakpoints.sm]: spacing["4"],
      ":is([data-footer-centered] *)": `${spacing["8"]} !important`,
    },
    alignItems: {
      default: "stretch",
      ":is([data-footer-centered] *)": "center",
      [containerBreakpoints.sm]: "center",
    },
    display: "flex",
    flexDirection: {
      default: "column",
      [containerBreakpoints.sm]: "row",
      // eslint-disable-next-line @stylexjs/valid-styles
      ":is([data-footer-centered] *)": "column !important",
    },
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    paddingBottom: spacing["6"],
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingTop: spacing["6"],
  },
  navSection: {
    columnGap: spacing["8"],
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(2, 1fr)",
      [containerBreakpoints.sm]: "repeat(4, 1fr)",
    },
    rowGap: spacing["6"],
  },
  section: {
    gap: spacing["2"],
    alignItems: {
      ":is([data-footer-centered] *)": "center",
    },
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    margin: 0,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["semibold"],
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  sectionContent: {
    gap: spacing["1.5"],
    alignItems: {
      ":is([data-footer-centered] *)": "center",
    },
    display: "flex",
    flexDirection: "column",
  },
  copyright: {
    margin: 0,
    fontSize: fontSize["xs"],
  },
  socialLinkList: {
    gap: spacing["4"],
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  socialLinkItem: {
    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      height: spacing["5"],
      width: spacing["5"],
    },
    textDecoration: "none",
    alignItems: "center",
    color: {
      default: uiColor.text1,
      ":hover": uiColor.text2,
    },
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    transitionDuration: animationDuration.fast,
    transitionProperty: "color",
    transitionTimingFunction: "ease-in-out",
  },
  logo: {
    alignItems: "center",
    alignSelf: {
      default: "start",
      ":is([data-footer-centered] *)": "center",
    },
    display: "flex",
    justifyContent: "center",
  },
  subscribe: {
    gap: spacing["2"],
    gridTemplateAreas: {
      default: `
        "title"
        "description"
        "input"
      `,
      ":is([data-subscribe-variant=horizontal])": `
        "title input"
        "description input"
      `,
    },
    alignItems: {
      default: "stretch",
      ":is([data-subscribe-variant=horizontal])": "center",
    },
    display: "grid",
    gridTemplateColumns: {
      default: "1fr",
      ":is([data-subscribe-variant=horizontal])": "1fr auto",
    },
  },
  subscribeTitle: {
    gridArea: "title",
    margin: 0,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["semibold"],
  },
  subscribeDescription: {
    gridArea: "description",
    margin: 0,
    fontSize: fontSize["sm"],
    marginBottom: spacing["2"],
  },
  subscribeInput: {
    gridArea: "input",
    gap: spacing["2"],
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  subscribeInputField: {
    flex: "1",
  },
});

/**
 * Footer root component. Main container for footer content.
 */
export interface FooterRootProps extends StyleXComponentProps<
  React.ComponentProps<"footer">
> {
  /**
   * Centers all footer content.
   */
  isCentered?: boolean;
}

export const FooterRoot = ({
  style,
  isCentered,
  ...props
}: FooterRootProps) => {
  return (
    <footer
      {...props}
      data-footer-centered={isCentered || undefined}
      {...stylex.props(styles.root, ui.bgSubtle, ui.text, style)}
    />
  );
};

/**
 * Footer logo component. Displays a logo in the footer.
 */
export interface FooterLogoProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const FooterLogo = ({ style, children, ...props }: FooterLogoProps) => {
  return (
    <div {...props} {...stylex.props(styles.logo, style)}>
      {children}
    </div>
  );
};

/**
 * Footer section component. Generic container for footer content with max-width, margin, and padding.
 * Automatically adds a dim bottom border if it's not the last section.
 */
export interface FooterSectionProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const FooterSection = ({
  style,
  children,
  ...props
}: FooterSectionProps) => {
  return (
    <div {...props} {...stylex.props(styles.footerSectionWrapper, style)}>
      <div {...stylex.props(styles.footerSection)}>{children}</div>
    </div>
  );
};

/**
 * Footer navigation section component. Responsive grid container that displays 2 columns on smaller screens and 4 columns on larger screens.
 */
export interface FooterNavSectionProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const FooterNavSection = ({
  style,
  ...props
}: FooterNavSectionProps) => {
  return <div {...props} {...stylex.props(styles.navSection, style)} />;
};

/**
 * Footer navigation group component. Container for grouping related footer content.
 */
export interface FooterNavGroupProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Optional title for the group.
   */
  title?: string;
}

export const FooterNavGroup = ({
  style,
  title,
  children,
  ...props
}: FooterNavGroupProps) => {
  return (
    <div {...props} {...stylex.props(styles.section, style)}>
      {title && (
        <h3 {...stylex.props(styles.sectionTitle, ui.text)}>{title}</h3>
      )}
      <div {...stylex.props(styles.sectionContent)}>{children}</div>
    </div>
  );
};

/**
 * Footer copyright component. Displays copyright information.
 */
export interface FooterCopyrightProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {}

export const FooterCopyright = ({
  style,
  children,
  ...props
}: FooterCopyrightProps) => {
  return (
    <p {...props} {...stylex.props(styles.copyright, ui.textDim, style)}>
      {children}
    </p>
  );
};

/**
 * Footer social link list component. Container for social media links.
 */
export interface FooterSocialLinkListProps extends StyleXComponentProps<
  React.ComponentProps<"nav">
> {}

export const FooterSocialLinkList = ({
  style,
  children,
  ...props
}: FooterSocialLinkListProps) => {
  return (
    <nav
      {...props}
      {...stylex.props(styles.socialLinkList, style)}
      aria-label="Social links"
    >
      {children}
    </nav>
  );
};

/**
 * Footer social link item component. Individual social media link.
 */
export interface FooterSocialLinkItemProps extends StyleXComponentProps<
  Omit<AriaLinkProps, "children">
> {
  /**
   * Icon to display in the link. Typically from lucide-react.
   */
  icon?: React.ReactNode;
  /**
   * Accessible label for the link.
   */
  "aria-label": string;
  /**
   * Link content (optional, icon can be used alone).
   */
  children?: React.ReactNode;
}

export const FooterSocialLinkItem = ({
  style,
  icon,
  children,
  ...props
}: FooterSocialLinkItemProps) => {
  return (
    <AriaLink
      {...props}
      {...stylex.props(styles.socialLinkItem, style)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {children}
    </AriaLink>
  );
};

/**
 * Footer subscribe component. Container for newsletter subscription section.
 */
export interface FooterSubscribeProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Layout variant. "horizontal" displays title/description on left and input on right. "vertical" stacks everything.
   */
  variant?: "horizontal" | "vertical";
}

export const FooterSubscribe = ({
  style,
  variant = "vertical",
  children,
  ...props
}: FooterSubscribeProps) => {
  return (
    <div
      {...props}
      data-subscribe-variant={variant}
      {...stylex.props(styles.subscribe, style)}
    >
      {children}
    </div>
  );
};

/**
 * Footer subscribe title component. Displays the subscription section title.
 */
export interface FooterSubscribeTitleProps extends StyleXComponentProps<
  React.ComponentProps<"h3">
> {}

export const FooterSubscribeTitle = ({
  style,
  children,
  ...props
}: FooterSubscribeTitleProps) => {
  return (
    <h3 {...props} {...stylex.props(styles.subscribeTitle, ui.text, style)}>
      {children}
    </h3>
  );
};

/**
 * Footer subscribe description component. Displays the subscription section description.
 */
export interface FooterSubscribeDescriptionProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {}

export const FooterSubscribeDescription = ({
  style,
  children,
  ...props
}: FooterSubscribeDescriptionProps) => {
  return (
    <p
      {...props}
      {...stylex.props(styles.subscribeDescription, ui.textDim, style)}
    >
      {children}
    </p>
  );
};

/**
 * Footer subscribe input component. Contains an email input field and subscribe button.
 */
export interface FooterSubscribeInputProps extends StyleXComponentProps<
  React.ComponentProps<"form">
> {
  /**
   * Callback function called when the form is submitted.
   */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * Placeholder text for the email input.
   */
  placeholder?: string;
  /**
   * Text for the subscribe button.
   */
  buttonText?: string;
}

export const FooterSubscribeInput = ({
  style,
  onSubmit,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  ...props
}: FooterSubscribeInputProps) => {
  return (
    <form
      {...props}
      {...stylex.props(styles.subscribeInput, style)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
    >
      <TextField
        name="email"
        type="email"
        placeholder={placeholder}
        label={null}
        style={styles.subscribeInputField}
      />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Footer = {
  Root: FooterRoot,
  Logo: FooterLogo,
  Section: FooterSection,
  NavSection: FooterNavSection,
  NavGroup: FooterNavGroup,
  Copyright: FooterCopyright,
  SocialLinkList: FooterSocialLinkList,
  SocialLinkItem: FooterSocialLinkItem,
  Subscribe: FooterSubscribe,
  SubscribeTitle: FooterSubscribeTitle,
  SubscribeDescription: FooterSubscribeDescription,
  SubscribeInput: FooterSubscribeInput,
};
