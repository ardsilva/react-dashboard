import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { lingui } from '@lingui/vite-plugin';

export default defineConfig({
	plugins: [
		react({
			plugins: [['@lingui/swc-plugin', {}]],
		}),
		lingui(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setup-test.ts',
		css: false,
	},
});
