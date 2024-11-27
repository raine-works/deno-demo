import { serveStatic } from 'hono/deno';
import { createMiddleware } from 'hono/factory';
import fs from 'node:fs';
import path from 'node:path';

export const proxy = () => {
	return createMiddleware((c, next) => {
		const requestedPath = c.req.path;
		const fullPath = path.join('/mnt/static/portal/dist', requestedPath);
		if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
			return serveStatic({ root: '/mnt/static/portal/dist' })(c, next);
		} else {
			return serveStatic({
				root: '/mnt/static/portal/dist',
				rewriteRequestPath: () => '/index.html',
			})(c, next);
		}
	});
};
