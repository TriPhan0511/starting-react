import React, { useContext } from 'react'
import PokemonContext2 from './PokemonContext2'
import { Input } from './StyledComponents2'

function PokemonFilter2() {
	const { state, dispatch } = useContext(PokemonContext2)
	return (
		<Input
			onChange={(e) =>
				dispatch({
					type: 'SET_FILTER',
					payload: e.target.value,
				})
			}
		/>
	)
}

export default PokemonFilter2
