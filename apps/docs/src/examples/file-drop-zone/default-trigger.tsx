import {
  FileDropZone,
  FileDropDefaultTrigger,
} from "@/components/file-drop-zone";
import { CameraIcon } from "lucide-react";

export function DefaultTrigger() {
  return (
    <FileDropZone
      onAddFiles={(files) => {
        console.log("Files added:", files);
      }}
    >
      <CameraIcon />
      <FileDropDefaultTrigger />
    </FileDropZone>
  );
}
