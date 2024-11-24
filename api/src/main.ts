import { app } from './app.ts';

Deno.serve({ hostname: '127.0.0.1', port: 8000 }, app.fetch);

export type App = typeof app;
