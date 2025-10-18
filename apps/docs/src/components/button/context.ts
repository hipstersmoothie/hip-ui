import { createContext } from "react";

export const ButtonGroupContext = createContext<
  undefined | "vertical" | "horizontal"
>(undefined);
