import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const noCors = () => {
  return {
    name: "no-cors",
    transformIndexHtml(html) {
      return html.replace(`crossorigin `, "");
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), noCors()],
  base: "./",
  build: {
    outDir: './docs/example',
    emptyOutDir: true
  },
  server: {
    host: '0.0.0.0',
    cors: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: [
      './src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      './src/config/**',
    ],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },  
})