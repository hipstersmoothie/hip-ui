import { Button } from "@/components/button";
import { Popover } from "@/components/popover";

export function Basic() {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      <div>
        <h3>Popover Content</h3>
        <p>This is the content inside the popover.</p>
      </div>
    </Popover>
  );
}
