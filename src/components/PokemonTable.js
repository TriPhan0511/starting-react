import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import PokemonRow from './PokemonRow'

const PokemonTable = () => {
	const { filter, pokemon, setSelectedPokemon } = useContext(PokemonContext)
	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{pokemon
					.filter(({ name: { english } }) =>
						english.toLowerCase().includes(filter.toLowerCase())
					)
					.slice(0, 20)
					.map((pokemon) => (
						<PokemonRow
							key={pokemon.id}
							pokemon={pokemon}
							onClick={(p) => setSelectedPokemon(p)}
						/>
					))}
			</tbody>
		</table>
	)
}

export default PokemonTable
