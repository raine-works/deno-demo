import { Hono } from 'jsr:@hono/hono'

const app = new Hono().get('/', (c) => {
	return c.json({ msg: 'Hello World' })
})

export { app as useTest }
