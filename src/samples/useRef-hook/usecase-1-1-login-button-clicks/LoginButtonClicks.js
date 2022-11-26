// Link: https://dmitripavlutin.com/react-useref-guide/

// 1. Mutable values

// useRef(initialValue) hook accepts one argument as the initial value and
// returns a reference (aka ref). A reference is an object having a special property "current".

// reference.current accesses the reference value,
// and reference.current = newValue updates the reference value.

// There are two rules to remember about references:
// 1. The value of the reference is persisted (stay the same) between component re-renderings;
// 2. Updating a reference doesn't trigger a component re-rendering.

// --------------------------------

// Reference and state diff: There are two main differences between reference and state:
// 1. Updating a reference doesn't trigger re-rendering,
// while updating the state makes the component re-render;
// 2. The reference update is synchonous (the updated reference value is available right away),
// while the state update is asynchronous (the state variable is updated after re-rendering).

import React, { useRef, useState } from 'react'

function LoginButtonClicks() {
	const countRef = useRef(0)
	const handleClick = () => {
		countRef.current++
		console.log(`Clicked ${countRef.current} times.`)
	}
	console.log('I rendered') // 'I rendered' is logged to the console just once at initial rendering.
	return <button onClick={handleClick}>Click here</button>
}

// Use state:
// function LoginButtonClicks() {
// 	const [countRef, setCountRef] = useState(0)
// 	const handleClick = () => {
// 		setCountRef((c) => c + 1)
// 		console.log(`Clicked ${countRef} times.`)
// 	}
// 	console.log('I rendered')
// 	return <button onClick={handleClick}>Click here</button>
// }

export default LoginButtonClicks
