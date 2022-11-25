import React, { useContext } from 'react'
import PokemonContext2 from './PokemonContext2'

function PokemonInfo2() {
	const {
		state: { selectedPokemon },
	} = useContext(PokemonContext2)

	return selectedPokemon ? (
		<div>
			<h2 style={{ marginTop: '2.8rem' }}>{selectedPokemon.name.english}</h2>
			<table width='100%'>
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

export default PokemonInfo2
