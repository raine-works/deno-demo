import { hc } from 'hono/client';
import type { App } from '@deno/api';

export const apiClient = hc<App>('/');
