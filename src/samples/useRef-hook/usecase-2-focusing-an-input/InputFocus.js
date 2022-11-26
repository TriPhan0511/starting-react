// Link: https://dmitripavlutin.com/react-useref-guide/

// 2. Accessing DOM elements
// Another useful application of the useRef() hook is to access DOM elements.
// This is performed in three steps:
//    a. Define the reference to access the element: const elementRef = useRef()
//    b. Assign the reference to the ref attribute of the element: <div ref={elementRef}></div>
//    c. After mounting, elementRef.current points to DOM element.

import React, { useEffect, useRef } from 'react'

function InputFocus() {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<input ref={inputRef} type='text' />
		</div>
	)
}

export default InputFocus
