import type { Api } from '../index.tsx'
import { hc } from 'jsr:@hono/hono/client'
import { env } from './env.ts'

export const client = hc<Api>(env.BASEURL)
