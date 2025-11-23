import { flushSync } from "react-dom";
import { ToastQueue } from "react-stately";

import { ButtonVariant, ToastVariant } from "../theme/types";

export interface ToastContentType {
  variant?: ToastVariant;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    variant?: ButtonVariant;
    onPress: () => void;
  };
}

export const toasts = new ToastQueue<ToastContentType>({
  // Wrap state updates in a CSS view transition.
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        // eslint-disable-next-line @eslint-react/dom/no-flush-sync
        flushSync(fn);
      });
    } else {
      fn();
    }
  },
});
