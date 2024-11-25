import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { compress } from 'hono/compress';
import { serveStatic } from 'hono/deno';
import useTest from './routes/test.ts';

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(logger())
	.use('/*', serveStatic({ root: '/mnt/static/web/dist' }))
	.basePath('/api')
	.route('/test', useTest);
