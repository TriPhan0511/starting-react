import './App.css'
import React, { useReducer, useState } from 'react'
import { CssBaseline } from '@mui/material'
import {
	Title,
	TwoColumnsLayout,
	PageContainer,
} from './components/StyledComponents'

import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonContext from './PokemonContext'

const pokemonReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return { ...state, filter: action.payload }
		case 'SET_POKEMON':
			return { ...state, pokemon: action.payload }
		case 'SET_SELECTED_POKEMON':
			return { ...state, selectedPokemon: action.payload }
		default:
			throw new Error('No action')
	}
}

function App() {
	const [state, dispatch] = useReducer(pokemonReducer, {
		filter: '',
		pokemon: [],
		selectedPokemon: null,
	})

	React.useEffect(() => {
		fetch('/starting-react/pokemon.json')
			.then((resp) => resp.json())
			.then((data) =>
				dispatch({
					type: 'SET_POKEMON',
					payload: data,
				})
			)
	}, [])

	if (!state.pokemon) {
		return <div>Loading data</div>
	}

	return (
		<PokemonContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			<PageContainer>
				<CssBaseline />
				<Title>Pokemon Search</Title>
				<TwoColumnsLayout>
					<div>
						<PokemonFilter />
						<PokemonTable />
					</div>
					{<PokemonInfo />}
				</TwoColumnsLayout>
			</PageContainer>
		</PokemonContext.Provider>
	)
}

export default App
