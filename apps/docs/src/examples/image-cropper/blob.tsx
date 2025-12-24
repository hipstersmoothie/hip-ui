import { useMemo } from "react";
import { ImageCropper } from "@/components/image-cropper";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  example: {
    height: "320px",
    width: "max(80%, 320px)",
  },
});

function createRainbowBlob(): Blob {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new Blob([], { type: "image/png" });
  }

  // Create a horizontal rainbow gradient
  const gradient = ctx.createLinearGradient(0, 0, 128, 0);

  // Rainbow colors: red, orange, yellow, green, blue, indigo, violet
  gradient.addColorStop(0, "#ff0000"); // Red
  gradient.addColorStop(0.17, "#ff7f00"); // Orange
  gradient.addColorStop(0.33, "#ffff00"); // Yellow
  gradient.addColorStop(0.5, "#00ff00"); // Green
  gradient.addColorStop(0.67, "#0000ff"); // Blue
  gradient.addColorStop(0.83, "#4b0082"); // Indigo
  gradient.addColorStop(1, "#9400d3"); // Violet

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  // Convert to data URL and then to blob synchronously
  const dataUrl = canvas.toDataURL("image/png");
  const byteString = atob(dataUrl.split(",")[1] || "");
  const mimeString =
    dataUrl.split(",")[0]?.match(/:(.*?);/)?.[1] || "image/png";
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

export function BlobExample() {
  const rainbowBlob = useMemo(() => createRainbowBlob(), []);

  return (
    <ImageCropper.Root
      image={rainbowBlob}
      aspectRatio={1}
      style={styles.example}
    >
      <ImageCropper.Description />
      <ImageCropper.Image />
      <ImageCropper.CropArea />
    </ImageCropper.Root>
  );
}
