import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	plugins: [deno(), react()],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname as string, './src'),
		},
	},
	server: {
		host: '127.0.0.1',
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			},
			'/api/ws': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
				ws: true,
			},
			'/openapi': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			},
		},
	},
});
