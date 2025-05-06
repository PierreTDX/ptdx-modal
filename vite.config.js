import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  publicDir: false, // <- ici on désactive complètement le dossier public
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: '@ptdx-modal',
      fileName: (format) => `@ptdx-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});