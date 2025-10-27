import { Kbd } from "@/components/kbd";

export function Shortcuts() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div>
        Save: <Kbd>MetaOrCtrl+S</Kbd>
      </div>
      <div>
        Search: <Kbd>MetaOrCtrl+F</Kbd>
      </div>
      <div>
        Undo: <Kbd>MetaOrCtrl+Z</Kbd>
      </div>
      <div>
        Redo: <Kbd>MetaOrCtrl+Shift+Z</Kbd>
      </div>
      <div>
        Delete: <Kbd>Delete</Kbd> or <Kbd>Backspace</Kbd>
      </div>
    </div>
  );
}
