import React, { useEffect, useState } from 'react'

function FetchPokemons() {
	const [pokemons, setPokemons] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch('starting-react/pokemon.js')
			const data = await resp.json()
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
