import { Button } from "@/components/button";
import { Tooltip } from "@/components/tooltip";

export function Basic() {
  return (
    <Tooltip text="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
