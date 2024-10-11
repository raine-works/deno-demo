import { Hono } from 'jsr:@hono/hono'
import { compress } from 'jsr:@hono/hono/compress'
import { logger } from 'jsr:@hono/hono/logger'
import { env } from './utils/env.ts'
import { client } from './utils/client.ts'
import { useTest } from './routes/test.ts'
import { Top } from './routes/web.tsx'

const app = new Hono()
app.use(compress({ encoding: 'gzip' }))
app.use(logger())

const api = app.basePath('/api').route('/test', useTest)

app.get('/', async (c) => {
    const res = await client.api.test.$get()
    const json = await res.json()
    return c.html(<Top messages={[json.msg]} />)
})

Deno.serve({ port: parseInt(env.PORT) }, app.fetch)

export type Api = typeof api
