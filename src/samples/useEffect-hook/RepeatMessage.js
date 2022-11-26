// Link: https://dmitripavlutin.com/react-useeffect-explanation/

// Side-effect cleanup

import React, { useEffect, useRef, useState } from 'react'

function RepeatMessage({ message }) {
	useEffect(() => {
		const id = setInterval(() => {
			console.log(message)
		}, 2000)
		return () => {
			clearInterval(id)
		}
	}, [message])

	return <div>I'm logging to console "{message}"</div>
}

const App = () => {
	const [message, setMessage] = useState('')

	return (
		<div>
			<h3>Type the message to log the console</h3>
			<input
				type='text'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<RepeatMessage message={message} />
		</div>
	)
}

export default App
