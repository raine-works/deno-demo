import { Hono } from 'hono';
import { v1 } from 'uuid';

export const useAuth = new Hono()
	.get('/', (c) => {
		return c.json({ id: v1.generate() });
	});
