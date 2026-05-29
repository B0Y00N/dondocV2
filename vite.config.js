import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons.svg", "pig.svg"],
      manifest: {
        name: "돈독 (Don-Doc)",
        short_name: "돈독",
        description: "내 소비의 주치의, 돼지 건강으로 보는 나의 재정 상태",
        theme_color: "#FF6B9D",
        icons: [
          {
            src: "pig.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: "pig.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "pig.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
