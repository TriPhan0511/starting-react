import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import { Input } from './StyledComponents'

const PokemonFilter = () => {
	const {
		state: { filter },
		dispatch,
	} = useContext(PokemonContext)
	return (
		<Input
			value={filter}
			onChange={(e) =>
				dispatch({
					type: 'SET_FILTER',
					payload: e.target.value,
				})
			}
		/>
	)
}

export default PokemonFilter
