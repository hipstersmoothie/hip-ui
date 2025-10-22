import { FileDropZone } from "@/components/file-drop-zone";

export function Basic() {
  return (
    <FileDropZone onDrop={(files) => console.log("Files dropped:", files)}>
      <div
        style={{
          padding: "2rem",
          border: "2px dashed #ccc",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        Drop files here or click to upload
      </div>
    </FileDropZone>
  );
}
