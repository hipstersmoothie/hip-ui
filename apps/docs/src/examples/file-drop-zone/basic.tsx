import { FileDropZone } from "@/components/file-drop-zone";

export function Basic() {
  return (
    <FileDropZone onDrop={(files) => console.log("Files dropped:", files)}>
      Drop files here or click to upload
    </FileDropZone>
  );
}
