import { serveStatic } from 'hono/deno';

export const usePortal = serveStatic({ root: '/mnt/static/portal/dist' });
