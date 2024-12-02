import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/styles/variables.scss" as variables;
          @use "./src/styles/responsive.scss" as responsive;
        `
      }
    }
  }
})
