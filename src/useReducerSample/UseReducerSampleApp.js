import React, { useReducer } from 'react'

const UseReducerSampleApp = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'CHANGE_NUMBER':
				return { ...state, num: action.payload }
			default:
				throw new Error('No action')
		}
	}
	const [state, dispatch] = useReducer(reducer, {
		num: 0,
	})
	return (
		<div>
			<button
				onClick={() =>
					dispatch({
						type: 'CHANGE_NUMBER',
						payload: state.num - 1,
					})
				}
			>
				-
			</button>
			<span>{state.num}</span>
			<button
				onClick={() =>
					dispatch({
						type: 'CHANGE_NUMBER',
						payload: state.num + 1,
					})
				}
			>
				+
			</button>
		</div>
	)
}

export default UseReducerSampleApp
