import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    laravel({
      input: ['resources/js/app.js', '/resources/css/app.css'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
});
