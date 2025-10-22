import { ContextMenu } from "@/components/context-menu";
import { MenuItem } from "@/components/menu";

export function Basic() {
  return (
    <ContextMenu
      trigger={
        <div
          style={{
            padding: "2rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Right-click me
        </div>
      }
    >
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete</MenuItem>
    </ContextMenu>
  );
}
