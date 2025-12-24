import { ImageCropper } from "@/components/image-cropper";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  example: {
    height: "320px",
    width: "max(80%, 320px)",
  },
});

export function Basic() {
  return (
    <ImageCropper.Root
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      aspectRatio={1}
      style={styles.example}
    >
      <ImageCropper.Description />
      <ImageCropper.Image />
      <ImageCropper.CropArea />
    </ImageCropper.Root>
  );
}
