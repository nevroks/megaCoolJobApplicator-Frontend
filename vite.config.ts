import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@components': '/src/components/index.ts',
      '@ui': '/src/components/ui/index.ts',
    },
  },
});
