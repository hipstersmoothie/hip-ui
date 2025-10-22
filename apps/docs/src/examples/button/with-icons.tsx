import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Download, Upload, Settings } from "lucide-react";

export function ButtonWithIcons() {
  return (
    <Flex gap="4" wrap>
      <Button>
        <Download />
        Download
      </Button>
      <Button variant="secondary">
        <Upload />
        Upload
      </Button>
      <Button variant="tertiary">
        <Settings />
        Settings
      </Button>
    </Flex>
  );
}
