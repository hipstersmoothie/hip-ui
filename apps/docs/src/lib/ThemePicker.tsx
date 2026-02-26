import { capitalCase } from "change-case";
import { use, useState } from "react";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import { Flex } from "@/components/flex";
import { IconButton } from "@/components/icon-button";
import { Select, SelectItem } from "@/components/select";

import type { Color, PrimaryColor, UiColor } from "./ThemeContext";

import { ColorPreview } from "./ColorPreview";
import { ThemeContext, primaryColors, uiNames } from "./ThemeContext";

function ColorSelect<T extends Color>({
  color,
  colors,
  label,
  onChange,
}: {
  color: T;
  colors: ReadonlyArray<T>;
  label: string;
  onChange: (color: T) => void;
}) {
  return (
    <Select
      prefix={<ColorPreview color={color} />}
      label={label}
      value={color}
      onChange={(value) => onChange(value as T)}
    >
      {colors.map((c) => (
        <SelectItem key={c} id={c} prefix={<ColorPreview color={c} />}>
          {capitalCase(c)}
        </SelectItem>
      ))}
    </Select>
  );
}

export const ThemePicker = () => {
  const { theme, setTheme } = use(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      isOpen={open}
      onOpenChange={setOpen}
      trigger={
        <IconButton aria-label="Theme" variant="tertiary">
          <div>
            <ColorPreview color={theme.primaryColor} />
          </div>
        </IconButton>
      }
    >
      <DialogHeader>Theme</DialogHeader>
      <DialogBody>
        <Flex direction="column" gap="4">
          <ColorSelect
            color={theme.primaryColor}
            colors={primaryColors}
            label="Primary Color"
            onChange={(color) =>
              setTheme({ ...theme, primaryColor: color as PrimaryColor })
            }
          />
          <ColorSelect
            color={theme.uiColor}
            colors={uiNames}
            label="UI Color"
            onChange={(color) =>
              setTheme({ ...theme, uiColor: color as UiColor })
            }
          />
          <ColorSelect
            color={theme.successColor}
            colors={primaryColors}
            label="Success Color"
            onChange={(color) =>
              setTheme({ ...theme, successColor: color as PrimaryColor })
            }
          />
          <ColorSelect
            color={theme.warningColor}
            colors={primaryColors}
            label="Warning Color"
            onChange={(color) =>
              setTheme({ ...theme, warningColor: color as PrimaryColor })
            }
          />
          <ColorSelect
            color={theme.criticalColor}
            colors={primaryColors}
            label="Critical Color"
            onChange={(color) =>
              setTheme({ ...theme, criticalColor: color as PrimaryColor })
            }
          />
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button onClick={() => setOpen(false)}>Done</Button>
      </DialogFooter>
    </Dialog>
  );
};
