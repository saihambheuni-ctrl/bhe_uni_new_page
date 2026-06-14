import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/bhe_uni_new_page/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
});
