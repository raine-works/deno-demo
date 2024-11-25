import './App.css';
// @deno-types="@types/react"
import { useState } from 'react';
import { apiClient } from '@/lib/api.ts';

function App() {
	const [msg, setMsg] = useState('');

	return (
		<>
			<div>
				<button
					onClick={async () => {
						const res = await apiClient.api.test.$get();
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
}

export default App;
