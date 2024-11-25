import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { serveStatic } from 'hono/deno';
import { honoLogger } from '@/middleware/logger.ts';
import useWs from '@/routes/ws.ts';
import useTest from '@/routes/test.ts';

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(honoLogger)
	.use('/*', serveStatic({ root: '/mnt/static/web/dist' }))
	.basePath('/api')
	.route('/ws', useWs)
	.route('/test', useTest);
