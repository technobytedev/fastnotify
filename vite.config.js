import { defineConfig } from 'vite';

export default defineConfig({
  root: 'demo',
  base: '/fastnotify/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
});
