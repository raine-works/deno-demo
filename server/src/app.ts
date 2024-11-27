import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { honoLogger } from '@/middlewares/logger.ts';
import { openAPISpecs } from 'hono-openapi';
import { wsRoute } from '@/routes/ws.ts';
import { authRoute } from '@/routes/auth.ts';
import { proxy } from '@/middlewares/proxy.ts';

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(honoLogger);

export const api = app
	.basePath('/api')
	.route('/ws', wsRoute)
	.route('/auth', authRoute);

// OpenApi spec.
app.get(
	'/openapi',
	openAPISpecs(app, {
		documentation: {
			info: {
				title: 'Deno Demo',
				version: '1.0.0',
				description: 'API for Deno demo.',
			},
		},
	}),
);

app.use(proxy());
