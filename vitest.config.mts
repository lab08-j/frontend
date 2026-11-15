import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: false,
    // A project can be empty (e.g. no unit tests yet) without failing the run.
    passWithNoTests: true,
    projects: [
      {
        extends: true,
        test: { name: 'unit', include: ['tests/unit/**/*.test.{ts,tsx}'] },
      },
      {
        extends: true,
        test: { name: 'integration', include: ['tests/integration/**/*.test.{ts,tsx}'] },
      },
    ],
  },
});
