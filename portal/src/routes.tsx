import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';

const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
}).lazy(() => import('@/pages/home.tsx').then((d) => d.Route));

const docsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/docs',
}).lazy(() => import('@/pages/docs.tsx').then((d) => d.Route));

export const routeTree = rootRoute.addChildren([indexRoute, docsRoute]);
