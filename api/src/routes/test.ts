import { Hono } from 'hono';
import { v1 } from 'uuid';

const useTest = new Hono().get('/', (c) => {
	return c.json({ id: v1.generate() });
});

export { useTest };
