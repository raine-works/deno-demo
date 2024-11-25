import { Hono } from 'hono';
import { v1 } from 'uuid';

export default new Hono()
	.get('/', (c) => {
		return c.json({ id: v1.generate() });
	});
