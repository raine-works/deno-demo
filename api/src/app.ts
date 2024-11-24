import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { compress } from 'hono/compress'
import { useTest } from './routes/test.ts'

export const app = new Hono()
	.use(compress({ encoding: 'gzip' }))
	.use(logger())
	.basePath('/api')
	.route('/test', useTest)
