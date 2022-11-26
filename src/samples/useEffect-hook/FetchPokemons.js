import React, { useEffect, useState } from 'react'

function FetchPokemons() {
	const [pokemons, setPokemons] = useState([])
	useEffect(() => {
		async function fetchData() {
			const resp = await fetch('starting-react/pokemon.js')
			const data = await resp.json(resp)
			setPokemons(data)
		}
		fetchData()
	}, [])

	return (
		<div>
			{pokemons.map((pokemon) => (
				<p key={pokemon.id}>{pokemon.name.english}</p>
			))}
		</div>
	)
}

export default FetchPokemons
