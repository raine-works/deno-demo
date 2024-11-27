import { hc } from 'hono/client';
import type { Api } from '@deno/server';

const url = new URL(import.meta.url);
export const client = hc<Api>(url.origin);
export const socket = client.api.ws.$ws();
