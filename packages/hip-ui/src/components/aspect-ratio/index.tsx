import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  aspectRatio: (aspectRatio: number) => ({ aspectRatio }),
  container: {
    position: "relative",
    width: "100%",
  },
});

export interface AspectRatioProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  aspectRatio?: number;
}

export function AspectRatio({
  style,
  aspectRatio = 1,
  ...props
}: AspectRatioProps) {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.container,
        styles.aspectRatio(aspectRatio),
        style,
      )}
    />
  );
}
