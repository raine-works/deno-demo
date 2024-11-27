import { z } from 'zod';

const EnvSchema = z.object({
	LOG_LEVEL: z.enum(['info', 'debug']),
	NODE_ENV: z.enum(['development', 'test', 'production']),
	PORT: z.string().default('8000'),
	ORIGIN: z.string().default('http://127.0.0.1:8000'),
	TZ: z.string(),
});

export const env = EnvSchema.parse(Deno.env.toObject());
