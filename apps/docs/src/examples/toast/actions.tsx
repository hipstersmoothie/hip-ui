"use client";

import { Button } from "@/components/button";
import { ToastRegion, toasts } from "@/components/toast";

export function Actions() {
  return (
    <>
      <ToastRegion />
      <Button
        onPress={() =>
          toasts.add(
            {
              title: "File deleted",
              description: "The file has been moved to the trash.",
              action: {
                label: "Undo",
                variant: "primary",
                onPress: () => {
                  toasts.add(
                    {
                      title: "Undone",
                      description: "The file has been restored.",
                    },
                    {
                      timeout: 3000,
                    },
                  );
                },
              },
            },
            {
              timeout: 5000,
            },
          )
        }
      >
        Delete File
      </Button>
    </>
  );
}
