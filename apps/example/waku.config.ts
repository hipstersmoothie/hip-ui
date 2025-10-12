import { defineConfig } from "waku/config";
import stylexPlugin from "unplugin-stylex/vite";

export default defineConfig({
  vite: {
    plugins: [
      stylexPlugin({
        stylex: {
          debug: false,
        },
      }),
    ],
  },
});
