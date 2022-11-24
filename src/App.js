import './App.css'
import React, { useReducer, useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

import {
	Title,
	TwoColumnsLayout,
	PageContainer,
} from './components/StyledComponents'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'

const pokemonReducer = (
	state = {
		filter: '',
		pokemon: [],
		selectedPokemon: null,
	},
	action
) => {
	switch (action.type) {
		case 'SET_FILTER':
			return { ...state, filter: action.payload }
		case 'SET_POKEMON':
			return { ...state, pokemon: action.payload }
		case 'SET_SELECTED_POKEMON':
			return { ...state, selectedPokemon: action.payload }
		default:
			return state
	}
}

const store = createStore(pokemonReducer)

function App() {
	const dispatch = useDispatch()
	const pokemon = useSelector((state) => state.pokemon)

	useEffect(() => {
		fetch('/starting-react/pokemon.json')
			.then((resp) => resp.json())
			.then((data) =>
				dispatch({
					type: 'SET_POKEMON',
					payload: data,
				})
			)
	}, [])

	if (!pokemon) {
		return <div>Loading data</div>
	}

	return (
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
	)
}

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
)
