import { z } from 'zod';

const EnvSchema = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']),
	LOG_LEVEL: z.enum(['info', 'debug']),
	PORT: z.string(),
	TZ: z.string(),
});

export const env = EnvSchema.parse(Deno.env.toObject());
