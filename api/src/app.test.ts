import { app } from './app.ts';
import { expect } from 'expect';

Deno.test('test GET endpoint', async () => {
	const res = await app.request('/api/test');
	expect(res.status).toBe(200);
});
