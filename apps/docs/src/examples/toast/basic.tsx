"use client";

import { Button } from "@/components/button";
import { ToastRegion, toasts } from "@/components/toast";

export function Basic() {
  return (
    <>
      <ToastRegion />
      <Button
        onPress={() =>
          toasts.add(
            {
              title: "Toast complete!",
              description: "Great success.",
            },
            {
              timeout: 3000,
            },
          )
        }
      >
        Show Toast
      </Button>
    </>
  );
}
