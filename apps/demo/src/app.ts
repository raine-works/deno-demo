import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { compress } from 'hono/compress'
import { v1 } from 'uuid'

export const app = new Hono()
app.use(compress({ encoding: 'gzip' }))
app.use(logger())

app.get('/', (c) => {
	return c.json({ id: v1.generate() })
})
