import { useState } from "react";

import { Button } from "@/components/button";
import { Lightbox } from "@/components/lightbox";

const SAMPLE_IMAGES = [
  "https://picsum.photos/seed/1/800/600",
  "https://picsum.photos/seed/2/800/600",
  "https://picsum.photos/seed/3/800/600",
];

export function Basic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Lightbox</Button>
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        images={SAMPLE_IMAGES}
        alt="Sample image"
      />
    </>
  );
}
