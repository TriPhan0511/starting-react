import PropTypes from 'prop-types'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'

const PokemonInfo = () => {
	const { selectedPokemon } = useContext(PokemonContext)
	return selectedPokemon ? (
		<div>
			<h2>{selectedPokemon.name.english}</h2>
			<table>
				<tbody>
					{Object.keys(selectedPokemon.base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{selectedPokemon.base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : null
}

// PokemonInfo.propTypes = PokemonType

export default PokemonInfo