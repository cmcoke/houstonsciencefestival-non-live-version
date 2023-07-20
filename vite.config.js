// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        present: resolve(__dirname, 'present.html'),
        sponsor: resolve(__dirname, 'sponsor.html'),
      },
    },
  },
})