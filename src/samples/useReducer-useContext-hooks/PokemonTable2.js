import React, { useContext } from 'react'
import PokemonContext2 from './PokemonContext2'
import PokemonRow2 from './PokemonRow2'

function PokemonTable2() {
	const {
		state: { pokemons, filter },
		dispatch,
	} = useContext(PokemonContext2)
	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
				{pokemons
					.filter((pokemon) =>
						pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
					)
					.slice(0, 20)
					.map((pokemon) => (
						<PokemonRow2
							key={pokemon.id}
							pokemon={pokemon}
							onClick={() => {
								dispatch({
									type: 'SET_SELECTED_POKEMON',
									payload: pokemon,
								})
							}}
						/>
					))}
			</thead>
		</table>
	)
}

export default PokemonTable2
