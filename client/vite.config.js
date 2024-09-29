// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Beállít egy JSDOM környezetet a komponens teszteléséhez (böngésző-szerű környezet).
    globals: true,        // Lehetővé teszi a globális változók használatát
    setupFiles: './src/setupTests.js',  // Fájl a tesztkönyvtárak konfigurálásához, pl. globális mock-ok és importálások.
  },
});