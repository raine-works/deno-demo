// @deno-types="@types/react"
import { useState } from 'react';
import { client, socket } from '@/lib/api.ts';
import { createLazyRoute, Link } from '@tanstack/react-router';

const Home = () => {
	const [msg, setMsg] = useState('');

	return (
		<>
			<div>
				<Link href='/docs'>Docs</Link>
				<button
					onClick={async () => {
						socket.send('Hello World');
						const res = await client.api.auth.$get();
						const json = await res.json();
						setMsg(json.id);
					}}
				>
					Click Me!
				</button>
				<p>{msg}</p>
			</div>
		</>
	);
};

export const Route = createLazyRoute('/')({
	component: Home,
});
