import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import { v1 } from 'uuid';
import { z } from 'zod';
import 'zod-openapi/extend';

export const authRoute = new Hono()
	.get(
		'/',
		describeRoute({
			description: 'Get a new uuid.',
			responses: {
				'200': {
					description: 'Successful uuid response',
					content: {
						'application/json': {
							schema: resolver(
								z.object({
									id: z.string().openapi({ example: '6753a6e0-ac3e-11ef-a162-93cebb61566e' }),
								}),
							),
						},
					},
				},
			},
		}),
		(c) => {
			return c.json({ id: v1.generate() });
		},
	);
