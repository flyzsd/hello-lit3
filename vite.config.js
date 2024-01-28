import { defineConfig } from 'vite'

export default defineConfig({
  base: "/jpmcoin/ui/",
  build: {
    sourcemap: true,
    modulePreload: {polyfill: false},
  }
});