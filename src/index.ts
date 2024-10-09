import { Hono } from 'jsr:@hono/hono';
import { logger } from 'jsr:@hono/hono/logger';
import { env } from './utils/env.ts';
import test from './routes/test.ts';

const app = new Hono();
app.use(logger());

app.route('/test', test);

Deno.serve({ port: parseInt(env.PORT) }, app.fetch);
