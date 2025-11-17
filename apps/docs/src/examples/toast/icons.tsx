"use client";

import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react";

import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { ToastRegion, toasts } from "@/components/toast";

export function Icons() {
  return (
    <>
      <ToastRegion />
      <Flex gap="4" wrap>
        <Button
          onPress={() =>
            toasts.add(
              {
                variant: "success",
                icon: <CheckCircle />,
                title: "Success",
                description: "Your changes have been saved successfully.",
              },
              {
                timeout: 3000,
              },
            )
          }
        >
          Show Success Toast
        </Button>
        <Button
          onPress={() =>
            toasts.add(
              {
                icon: <Info />,
                title: "Information",
                description: "Here's some helpful information for you.",
              },
              {
                timeout: 3000,
              },
            )
          }
        >
          Show Info Toast
        </Button>
        <Button
          onPress={() =>
            toasts.add(
              {
                variant: "warning",
                icon: <AlertCircle />,
                title: "Warning",
                description: "Please review your input before submitting.",
              },
              {
                timeout: 3000,
              },
            )
          }
        >
          Show Warning Toast
        </Button>
        <Button
          onPress={() =>
            toasts.add(
              {
                variant: "critical",
                icon: <XCircle />,
                title: "Error",
                description: "Something went wrong. Please try again.",
              },
              {
                timeout: 3000,
              },
            )
          }
        >
          Show Error Toast
        </Button>
      </Flex>
    </>
  );
}
