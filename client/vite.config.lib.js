import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.html',
      name: 'myLibrary',
      formats: ['es', 'umd']
    }
  }
});