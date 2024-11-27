import { createLazyRoute } from '@tanstack/react-router';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

const Docs = () => {
	return (
		<ApiReferenceReact
			configuration={{
				spec: {
					url: '/openapi',
				},
			}}
		/>
	);
};

export const Route = createLazyRoute('/')({
	component: Docs,
});
