import { Popover } from "@/components/popover";
import { Button } from "@/components/button";

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
