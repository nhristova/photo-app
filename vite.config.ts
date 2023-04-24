import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/photo-app/',
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, 'src'),
    },
  }
})
