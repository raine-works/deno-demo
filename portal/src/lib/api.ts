import { hc } from 'hono/client';
import type { App } from '../../../server/src/main.ts';

const url = new URL(import.meta.url);
export const client = hc<App>(url.origin);
export const socket = client.api.ws.$ws();
