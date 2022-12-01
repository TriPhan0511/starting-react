import React from 'react'
import Button from '@mui/material/Button'

function PokemonRow({ pokemon }) {
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(', ')}</td>
			<td>
				<Button variant='contained'>More Infomation</Button>
			</td>
		</tr>
	)
}

export default PokemonRow
