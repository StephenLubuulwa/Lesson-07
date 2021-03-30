// useState: greeting

import React, { useState } from 'react';

function Greeting() {
	// 💣 delete this variable declaration and replace it with a React.useState call
	const [name, setName] = useState('Stephen');

	function handleChange(event) {
		// 🐨 update the name here based on event.target.value
		setName(event.target.value);
	}

	return (
		<div>
			<form>
				<label htmlFor='name'>Name: </label>
				<input onChange={handleChange} id='name' />
			</form>
			{name ? <strong>Welcome, {name}</strong> : 'Please type your name'}
		</div>
	);
}

function App() {
	return <Greeting />;
}

export default App;
