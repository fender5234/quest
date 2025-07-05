import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true // Или '0.0.0.0' для полной открытости
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './grettings.html', // Другие необходимые HTML страницы
      }
    }
  }
});

