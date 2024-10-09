import { Hono } from 'jsr:@hono/hono'

const app = new Hono()

app.get('/', (c) => {
	return c.json({ msg: 'This is a test' })
})

export default app
