import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

import PokemonType from '../PokemonType'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'

const PokemonRow = ({ pokemon }) => {
	const { dispatch } = useContext(PokemonContext)
	return (
		<tr>
			<td>{pokemon.name.english}</td>
			<td>{pokemon.type.join(', ')}</td>
			<td>
				<Button
					variant='contained'
					color='primary'
					onClick={() =>
						dispatch({
							type: 'SET_SELECTED_POKEMON',
							payload: pokemon,
						})
					}
				>
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
