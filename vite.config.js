import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  define: { __BUILD_ID__: JSON.stringify(Date.now().toString(36)) },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
});
