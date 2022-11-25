import React, { memo, useCallback, useMemo, useState } from 'react'

function App3() {
	const [count, setCount] = useState(0)
	const [todos, setTodos] = useState(['todo 1', 'todo 2'])

	// // useMemo hook: remember value of a variable.
	// // The calculationResult will be re-calculated only when the count changed.
	// const calculationResult = useMemo(() => {
	// 	return expensiveCalculation(count)
	// }, [count])

	const increment = () => {
		setCount(count + 1)
	}

  // useCallback: 
	const addTodo = useCallback(() => {
		setTodos([...todos, 'New todo'])
	}, [todos])

	// const addTodo = () => {
	// 	setTodos([...todos, 'New todo'])
	// }

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			{/* <button onClick={addTodo}>Add Todo</button> */}
			<hr />
			<div>
				Count: {count} <br />
				{/* Calculation Result: {calculationResult} <br /> */}
				<button onClick={increment}>Increment</button>
			</div>
		</>
	)
}

// A component
const Todos = memo(({ todos, addTodo }) => {
	console.log('TODOS RENDERED')
	return (
		<>
			<h3>My todos</h3>
			{todos.map((todo, index) => (
				<p key={index}>{todo}</p>
			))}
			<button onClick={addTodo}>Add Todo</button>
		</>
	)
})

// const expensiveCalculation = (count) => {
// 	console.log('Calculating')
// 	for (let index = 0; index < 1000000000; index++) {
// 		count += 1
// 	}
// 	console.log('Done Calculation!')
// 	return count
// }

export default App3
