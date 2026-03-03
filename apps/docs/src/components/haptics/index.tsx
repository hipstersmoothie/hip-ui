/* eslint-disable react/only-export-components -- Barrel file for haptics utility */
export {
  setHapticsEnabled,
  isHapticsEnabled,
  type HapticIntent,
} from "./haptics";
export { HapticsContext, HapticsProvider } from "./context";
export { useHaptics } from "./useHaptics";
/* eslint-enable react/only-export-components */
