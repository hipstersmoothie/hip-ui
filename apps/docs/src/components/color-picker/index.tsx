import * as stylex from "@stylexjs/stylex";
import { Pipette } from "lucide-react";
import { createContext, use } from "react";
import {
  ColorPicker as AriaColorPicker,
  Button,
  Color,
  ColorPickerStateContext,
  ColorSpace,
  Dialog,
  DialogTrigger,
  Popover,
  PopoverProps,
  type ColorPickerProps as AriaColorPickerProps,
} from "react-aria-components";

import { ColorArea } from "../color-area";
import { ColorField } from "../color-field";
import { ColorSlider } from "../color-slider";
import { ColorSwatch } from "../color-swatch";
import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "../color-swatch-picker";
import { SizeContext } from "../context";
import { Flex, FlexProps } from "../flex";
import { IconButton } from "../icon-button";
import { Select, SelectItem } from "../select";
import { Separator } from "../separator";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize } from "../theme/typography.stylex";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const ColorSpaceContext = createContext<ColorSpace>("hsb");

const styles = stylex.create({
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    display: "flex",
    fontSize: fontSize["sm"],
    gap: {
      default: spacing["2"],
      ":is([data-size=sm])": spacing["1"],
    },
    margin: 0,
    padding: 0,
  },
  root: {
    display: "block",
  },
  defaultPicker: {
    paddingBottom: spacing["3"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["2"],
  },
  popover: {
    paddingBottom: 0,
    paddingTop: 0,
    width: 328,
  },
  separator: {
    marginLeft: `calc(${spacing["2"]} * -1)`,
    marginRight: `calc(${spacing["2"]} * -1)`,
    width: `calc(100% + ${spacing["2"]} * 2)`,
  },
  grow: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  controls: {
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
  },
});

export interface ColorPickerProps
  extends StyleXComponentProps<Omit<AriaColorPickerProps, "children">>,
    Pick<PopoverProps, "placement"> {
  children?: React.ReactNode;
  size?: Size;
  label?: string;
}

function ColorSpaceProvider({ children }: { children: React.ReactNode }) {
  const state = use(ColorPickerStateContext);

  if (!state?.color) {
    throw new Error("Color needs to be a defined value");
  }

  return (
    <ColorSpaceContext value={state.color.getColorSpace()}>
      {children}
    </ColorSpaceContext>
  );
}

export function ColorPicker({
  style,
  children,
  label,
  size: sizeProp,
  placement,
  ...props
}: ColorPickerProps) {
  const popoverStyles = usePopoverStyles();
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaColorPicker {...props} {...stylex.props(styles.root, style)}>
        <ColorSpaceProvider>
          <DialogTrigger>
            <Button data-size={size} {...stylex.props(styles.button)}>
              <ColorSwatch />
              {label && <span>{label}</span>}
            </Button>
            <Popover
              placement={placement}
              {...stylex.props(
                popoverStyles.wrapper,
                popoverStyles.animation,
                styles.popover,
              )}
            >
              <Dialog className="color-picker-dialog">{children}</Dialog>
            </Popover>
          </DialogTrigger>
        </ColorSpaceProvider>
      </AriaColorPicker>
    </SizeContext>
  );
}

export interface DefaultColorEditorProps extends FlexProps {
  swatches?: string[];
  onSwatchChange?: (color: Color) => void;
  hasAlpha?: boolean;
}

export function DefaultColorEditor({
  style,
  swatches,
  onSwatchChange,
  hasAlpha = true,
  ...props
}: DefaultColorEditorProps) {
  const colorSpace = use(ColorSpaceContext);
  const state = use(ColorPickerStateContext);

  return (
    <Flex
      direction="column"
      gap="3"
      {...props}
      style={[styles.defaultPicker, style]}
    >
      {colorSpace === "hsb" ? (
        <ColorArea
          colorSpace={colorSpace}
          xChannel="saturation"
          yChannel="brightness"
        />
      ) : colorSpace === "hsl" ? (
        <ColorArea
          colorSpace={colorSpace}
          xChannel="hue"
          yChannel="saturation"
        />
      ) : (
        <ColorArea colorSpace={colorSpace} xChannel="red" yChannel="green" />
      )}

      <Separator style={styles.separator} />

      <Flex gap="2" align="center">
        <IconButton label="Pick color" variant="outline">
          <Pipette />
        </IconButton>
        <Select
          aria-label="Color format"
          value={colorSpace}
          onChange={(key) => {
            state?.setColor(state.color.toFormat(key as ColorSpace));
          }}
        >
          <SelectItem id="hsb">HSB</SelectItem>
          <SelectItem id="hsl">HSL</SelectItem>
          <SelectItem id="rgb">RGB</SelectItem>
        </Select>
        <ColorField
          aria-label="HEX code"
          colorSpace={colorSpace}
          style={styles.grow}
        />
        {hasAlpha && (
          <ColorField
            aria-label="Alpha"
            colorSpace={colorSpace}
            channel="alpha"
            style={styles.grow}
          />
        )}
      </Flex>

      <Separator style={styles.separator} />

      <SizeContext value="sm">
        <Flex direction="column" gap="3" style={styles.controls}>
          {colorSpace === "hsb" ? (
            <>
              <ColorSlider label="Hue" channel="hue" colorSpace={colorSpace} />
              <ColorSlider
                label="Saturation"
                channel="saturation"
                colorSpace={colorSpace}
              />
              <ColorSlider
                label="Brightness"
                channel="brightness"
                colorSpace={colorSpace}
              />
            </>
          ) : colorSpace === "hsl" ? (
            <>
              <ColorSlider label="Hue" channel="hue" colorSpace={colorSpace} />
              <ColorSlider
                label="Saturation"
                channel="saturation"
                colorSpace={colorSpace}
              />
              <ColorSlider
                label="Lightness"
                channel="lightness"
                colorSpace={colorSpace}
              />
            </>
          ) : (
            <>
              <ColorSlider label="Red" channel="red" colorSpace={colorSpace} />
              <ColorSlider
                label="Green"
                channel="green"
                colorSpace={colorSpace}
              />
              <ColorSlider
                label="Blue"
                channel="blue"
                colorSpace={colorSpace}
              />
            </>
          )}

          {hasAlpha && (
            <ColorSlider
              label="Alpha"
              channel="alpha"
              colorSpace={colorSpace}
            />
          )}
        </Flex>
      </SizeContext>
      {swatches && (
        <>
          <Separator style={styles.separator} />
          <Flex direction="column" align="center">
            <ColorSwatchPicker onChange={onSwatchChange}>
              {swatches.map((swatch) => (
                <ColorSwatchPickerItem key={swatch} color={swatch} />
              ))}
            </ColorSwatchPicker>
          </Flex>
        </>
      )}
    </Flex>
  );
}
