import * as stylex from "@stylexjs/stylex";

import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { lineHeight } from "../theme/typography.stylex";

const styles = stylex.create({
  root: {
    /* eslint-disable @stylexjs/valid-styles, @stylexjs/no-legacy-contextual-styles */

    ":is(*) > :is(:has(h1),h1)": {
      marginBottom: spacing["8"],
      marginTop: spacing["8"],
    },
    ":is(*) > :is(:has(h2),h2)": {
      marginBottom: spacing["4"],
      marginTop: spacing["8"],
    },
    ":is(*) > :is(:has(h3),h3)": {
      marginBottom: spacing["5"],
      marginTop: spacing["8"],
    },
    ":is(*) > :is(:has(h4),h4)": {
      marginBottom: spacing["8"],
      marginTop: spacing["8"],
    },
    ":is(*) > :is(:has(h5),h5)": {
      marginBottom: spacing["8"],
      marginTop: spacing["8"],
    },
    ":is(*) > blockquote": {
      marginBottom: 0,
      marginLeft: spacing["2"],
      marginRight: 0,
      marginTop: 0,
      paddingLeft: spacing["4"],
    },
    ":is(*) > p": {
      lineHeight: {
        default: lineHeight.xl,
        ":is(blockquote *)": lineHeight.base,
        ":is(li *)": lineHeight.base,
      },
      marginBottom: {
        default: spacing["5"],
        ":is(blockquote *)": spacing["0"],
        ":is(li *)": spacing["0"],
      },
      marginTop: {
        default: spacing["5"],
        ":is(blockquote *)": spacing["0"],
        ":is(li *)": spacing["0"],
      },
    },

    /* eslint-enable @stylexjs/valid-styles, @stylexjs/no-legacy-contextual-styles */
  },
});

export interface ContentProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

/**
 * A wrapper component that applies content spacing styles to child elements.
 *
 * @example
 * ```tsx
 * <Content>
 *   <h1>Title</h1>
 *   <p>Paragraph text</p>
 * </Content>
 * ```
 */
export const Content = ({ style, ...props }: ContentProps) => {
  return <div {...props} {...stylex.props(styles.root, style)} />;
};
