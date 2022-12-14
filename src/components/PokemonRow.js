import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

import PokemonType from '../PokemonType'

const PokemonRow = ({ pokemon, onClick }) => {
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(', ')}</td>
			<td>
				<Button variant='contained' color='primary' onClick={() => onClick()}>
					More information
				</Button>
			</td>
		</tr>
	)
}

PokemonRow.propType = {
	pokemon: PropTypes.arrayOf(PokemonType),
}

export default PokemonRow
