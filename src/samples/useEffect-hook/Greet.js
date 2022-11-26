// Link: https://dmitripavlutin.com/react-useeffect-explanation/

import React, { useEffect, useState } from 'react'

function Greet({ name }) {
	const message = `Aloha, ${name}`

	// // Component did mount
	// // Use an empty dependencies array to invoke a side-effect once after component mouting:
	// useEffect(() => {
	// 	document.title = `Welcome ${name}`
	// }, [])

	// Component did update
	// Each time the side-effect uses props or state values,
	// you must indicate these values as dependencies.

	// The useEffect(callback, [prop, state]) invokes the callback after
	// the changes are being committed to DOM if and only if any value
	// in the dependencies array [prop, state] has changed.
	useEffect(() => {
		document.title = `Welcome ${name}`
	}, [name])

	return <div>{message}</div>
}
// --------------------------------------

const App = () => {
	const [name, setName] = useState('')
	const [user, setUser] = useState('Guest')

	return (
		<div>
			<Greet name={user} />
			<form
				onSubmit={(e) => {
					e.preventDefault()
					name.length === 0 ? setUser('Guest') : setUser(name)
				}}
			>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}
// const App = () => {
// 	return <Greet name='Peter Pan' />
// }

export default App
