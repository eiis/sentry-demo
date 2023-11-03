import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sentryVitePlugin({
    org: "e-iism",
    project: "sentry-demo"
  }), sentryVitePlugin({
    org: "e-iism",
    project: "sentry-demo"
  })],

  build: {
    sourcemap: true
  }
})