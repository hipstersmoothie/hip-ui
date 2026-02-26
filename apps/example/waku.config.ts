import stylexPlugin from "unplugin-stylex/vite";
import { defineConfig } from "waku/config";

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
