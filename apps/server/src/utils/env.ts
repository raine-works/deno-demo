import { z } from 'npm:zod'

const EnvSchema = z.object({
	PORT: z.string(),
	BASEURL: z.string().url(),
})

export const env = EnvSchema.parse(Deno.env.toObject())
