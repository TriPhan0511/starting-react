import React from 'react'
import Button from '@mui/material/Button'

function PokemonRow2({ pokemon, onClick }) {
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(', ')}</td>
			<td>
				<Button variant='contained' onClick={onClick}>
					More information
				</Button>
			</td>
		</tr>
	)
}

export default PokemonRow2
