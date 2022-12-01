import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import store from './store'

import {
	PageContainer,
	TwoColumnLayout,
	Title,
} from './components/StyledComponents'

import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'

function MyApp() {
	const dispatch = useDispatch()

	useEffect(() => {
		async function fetchPokemons() {
			const resp = await fetch('/starting-react/pokemon.json')
			const data = await resp.json()
			dispatch({
				type: 'SET_POKEMONS',
				payload: data,
			})
		}
		fetchPokemons()
	})

	return (
		<PageContainer>
			<Title>Pokemon Search</Title>
			<TwoColumnLayout>
				<PokemonTable />
			</TwoColumnLayout>
		</PageContainer>
	)
}

export default () => {
	return (
		<Provider store={store}>
			<MyApp />
		</Provider>
	)
}
