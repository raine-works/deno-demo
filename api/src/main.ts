import { app } from './app.ts';

Deno.serve({ port: Number(Deno.env.get('PORT')) }, app.fetch);

export type App = typeof app;
