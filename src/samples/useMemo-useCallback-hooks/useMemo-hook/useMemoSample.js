import { useMemo, useState } from 'react'

// link: https://dmitripavlutin.com/react-usememo-hook/

// const memoizedResult = useMemo(compute, dependencies)

// const memoizedResult = useMemo(() => {
//   return expensiveFunction(propA, propB)
// }, [propA, propB])

export function CalculateFactorial() {
	const [number, setNumber] = useState(1)
	const [inc, setInc] = useState(0)

	const factorial = useMemo(() => {
		return factorialOf(number)
	}, [number])
	const onChange = (event) => setNumber(Number(event.target.value))
	const onClick = () => setInc((i) => i + 1)

	return (
		<div>
			Fatorial of <input value={number} onChange={onChange} /> is {factorial}
			<button onClick={onClick}>Re-render</button>
		</div>
	)
}

function factorialOf(n) {
	console.log('factorialOf(n) called!')
	return n <= 0 ? 1 : n * factorialOf(n - 1)
}
