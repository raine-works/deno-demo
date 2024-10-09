import { z } from 'npm:zod';

const EnvSchema = z.object({
    PORT: z.string(),
});

export const env = EnvSchema.parse(Deno.env.toObject());
