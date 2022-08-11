import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
        ],
      },
    }),
    tsconfigPaths(),
    eslint({ emitWarning: true, include: 'src/**/*.{ts,tsx}' }),
  ],
  resolve: {
    alias: [
      { find: '@src', replacement: 'src' },
      { find: '@components', replacement: 'src/components' },
      { find: '@pages', replacement: 'src/pages' },
      { find: '@hooks', replacement: 'src/hooks' },
    ],
  },
});
