import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { compress } from 'hono/compress';
import { honoLogger } from '@/middlewares/logger.ts';
import { openAPISpecs } from 'hono-openapi';
import { wsRoute } from '@/routes/ws.ts';
import { authRoute } from '@/routes/auth.ts';
import { proxy } from '@/middlewares/proxy.ts';
import { env } from '@/configs/env.ts';

export const app = new Hono()
	.use(cors({ origin: '*' }))
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
			servers: [{ url: env.ORIGIN }],
		},
	}),
);

app.use(proxy());
