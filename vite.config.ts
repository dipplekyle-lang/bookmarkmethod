import { defineConfig } from 'vite';

export default defineConfig({
  // index.html lives at the project root — Vite default, explicit for clarity
  root: '.',
  build: {
    outDir: 'dist',
    // Inline assets ≤ 100 kB as data URIs (keeps the large base64 images intact)
    assetsInlineLimit: 102400,
    rollupOptions: {
      input: 'index.html',
    },
  },
});
