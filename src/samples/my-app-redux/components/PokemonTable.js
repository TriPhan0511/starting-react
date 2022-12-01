import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PokemonRow from './PokemonRow'
import PokemonFilter from './PokemonFilter'

function PokemonTable() {
	const dispatch = useDispatch()
	const pokemons = useSelector((state) => state.pokemons)
	const filter = useSelector((state) => state.filter)

	return (
		<div>
			<PokemonFilter />
			{/* <Input
				type='text'
				value={filter}
				onChange={(e) => {
					dispatch({
						type: 'SET_FILTER',
						payload: e.target.value,
					})
				}}
			/> */}
			<table width='100%'>
				<thead>
					<tr style={{ fontSize: 20 }}>
						<th>Name</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{pokemons
						?.slice(0, 20)
						?.filter((pokemon) =>
							pokemon?.name?.english
								?.toLowerCase()
								.includes(filter.toLowerCase())
						)
						?.map((pokemon) => (
							<PokemonRow key={pokemon.id} pokemon={pokemon} />
						))}
				</tbody>
			</table>
		</div>
	)
}

export default PokemonTable
