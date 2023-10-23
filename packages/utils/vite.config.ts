import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'utils',
      entry: './src/index.ts',
      fileName: (format) => `utils.${format}.js`,
    },
    rollupOptions: {
      external: ['crypto-js'],
    },
  },
});
