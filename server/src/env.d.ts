import type { logger } from '@/utils/logger.ts';

declare module 'hono' {
	interface ContextVariableMap {
		logger: typeof logger;
	}
}
