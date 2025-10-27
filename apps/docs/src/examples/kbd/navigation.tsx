import { Kbd } from "@/components/kbd";

export function Navigation() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div>
        Move left: <Kbd>ArrowLeft</Kbd>
      </div>
      <div>
        Move right: <Kbd>ArrowRight</Kbd>
      </div>
      <div>
        Move up: <Kbd>ArrowUp</Kbd>
      </div>
      <div>
        Move down: <Kbd>ArrowDown</Kbd>
      </div>
      <div>
        Confirm: <Kbd>Enter</Kbd>
      </div>
    </div>
  );
}
