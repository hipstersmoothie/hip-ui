import * as stylex from "@stylexjs/stylex";
import { Copy } from "lucide-react";
import { useRef, useState } from "react";

import { IconButton } from "@/components/icon-button";

export function CopyToClipboardButton({
  style,
  text,
}: {
  style: stylex.StyleXStyles;
  text: string;
}) {
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const changeTextTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleCopy = () => {
    if (changeTextTimeoutRef.current) {
      clearTimeout(changeTextTimeoutRef.current);
      changeTextTimeoutRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    void navigator.clipboard.writeText(text);
    setTooltipText("Copied ✓");
    setTooltipOpen(true);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;

      setTooltipOpen(false);

      changeTextTimeoutRef.current = setTimeout(() => {
        setTooltipText("Copy to clipboard");
        changeTextTimeoutRef.current = null;
      }, 200);
    }, 2000);
  };

  return (
    <IconButton
      label={tooltipText}
      tooltipOpen={tooltipOpen}
      onTooltipOpenChange={(isOpen) =>
        !timeoutRef.current && setTooltipOpen(isOpen)
      }
      variant="tertiary"
      style={[style]}
      size="sm"
      onClick={handleCopy}
    >
      <Copy />
    </IconButton>
  );
}
