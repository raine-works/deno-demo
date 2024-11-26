import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { honoLogger } from '@/middlewares/logger.ts';
import { usePortal } from '@/routes/static.ts';
import { useWs } from '@/routes/ws.ts';
import { useAuth } from '@/routes/auth.ts';
import { openAPISpecs } from 'hono-openapi';

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(honoLogger)
	.use(usePortal)
	.basePath('/api')
	.route('/ws', useWs)
	.route('/auth', useAuth);

// OpenApi spec
app.get(
	'/openapi',
	openAPISpecs(app, {
		documentation: {
			info: {
				title: 'Deno Demo',
				version: '1.0.0',
				description: 'API for Deno demo.',
			},
			servers: [
				{
					url: 'http://localhost:8000',
					description: 'Local server.',
				},
			],
		},
	}),
);
