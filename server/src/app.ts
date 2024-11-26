import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { honoLogger } from '@/middleware/logger.ts';
import { usePortal } from '@/routes/static.ts';
import { useWs } from '@/routes/ws.ts';
import { useAuth } from '@/routes/auth.ts';

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(honoLogger)
	.use(usePortal)
	.basePath('/api')
	.route('/ws', useWs)
	.route('/auth', useAuth);
