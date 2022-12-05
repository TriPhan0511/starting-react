import React from 'react'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'

function PokemonRow({ pokemon }) {
	const dispatch = useDispatch()
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(', ')}</td>
			<td>
				<Button
					variant='contained'
					onClick={() =>
						dispatch({
							type: 'SET_SELECTED_POKEMON',
							payload: pokemon,
						})
					}
				>
					More Infomation
				</Button>
			</td>
		</tr>
	)
}

export default PokemonRow
