import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {
	const timerIdRef = useRef(0)
	const [count, setCount] = useState(0)

	const start = () => {
		if (timerIdRef.current) {
			return
		}
		timerIdRef.current = setInterval(() => {
			setCount((c) => c + 1)
		}, 1000)
	}

	const stop = () => {
		clearInterval(timerIdRef.current)
		timerIdRef.current = 0
	}

	const reset = () => {
		clearInterval(timerIdRef.current)
		timerIdRef.current = 0
		setCount(0)
	}
	useEffect(() => {
		return () => clearInterval(timerIdRef.current)
	}, [])

	return (
		<div>
			<p>{count}</p>
			<button onClick={start}>Start</button>
			<button onClick={reset}>Reset</button>
			<button onClick={stop}>Stop</button>
		</div>
	)
}

export default Stopwatch
