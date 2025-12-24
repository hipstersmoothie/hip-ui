import { Button } from "@/components/button";
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import { Flex } from "@/components/flex";
import { ImageCropper } from "@/components/image-cropper";
import { Slider } from "@/components/slider";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";
import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useState } from "react";

const styles = stylex.create({
  example: {
    height: "320px",
  },
  sliderWrapper: {
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
  },
  slider: {
    flexGrow: 1,
  },
});

export function DialogExample() {
  const [zoom, setZoom] = useState(1);

  return (
    <Dialog trigger={<Button>Open Dialog</Button>}>
      <DialogHeader>Crop Image</DialogHeader>
      <DialogDescription>
        Choose the area of the image you want to crop.
      </DialogDescription>
      <DialogBody>
        <Flex direction="column" gap="4">
          <ImageCropper.Root
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            aspectRatio={1}
            style={styles.example}
            zoom={zoom}
            onZoomChange={setZoom}
            minZoom={0.2}
            maxZoom={5}
          >
            <ImageCropper.Description />
            <ImageCropper.Image />
            <ImageCropper.CropArea />
          </ImageCropper.Root>
          <Flex align="center" gap="4" style={styles.sliderWrapper}>
            <ZoomOutIcon />
            <Slider
              minValue={0.2}
              maxValue={5}
              step={0.01}
              value={zoom}
              onChange={setZoom}
              showValueLabel={false}
              style={styles.slider}
            />
            <ZoomInIcon />
          </Flex>
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close">Crop</Button>
      </DialogFooter>
    </Dialog>
  );
}
