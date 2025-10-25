import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Tooltip } from "@/components/tooltip";

export function TooltipPlacements() {
  return (
    <Flex gap="4" wrap>
      <Tooltip text="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip text="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip text="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip text="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </Flex>
  );
}
