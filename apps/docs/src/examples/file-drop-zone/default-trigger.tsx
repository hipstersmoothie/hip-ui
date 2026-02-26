import { CameraIcon } from "lucide-react";

import {
  FileDropDefaultTrigger,
  FileDropZone,
} from "@/components/file-drop-zone";

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
