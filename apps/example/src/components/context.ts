import { createContext } from "react";

import type { Size } from "./types";

export const SizeContext = createContext<Size>("md");
