import { Tooltip } from "@/components/tooltip";
import { Button } from "@/components/button";

export function Basic() {
  return (
    <Tooltip text="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
