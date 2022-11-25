import React, { useEffect, useReducer } from 'react'
import { TwoColumnsLayout } from '../../components/StyledComponents'
import PokemonContext2 from './PokemonContext2'
import PokemonInfo2 from './PokemonInfo2'
import PokemonTable2 from './PokemonTable2'
import { Input, PageContainer, Title } from './StyledComponents2'
import CssBaseline from '@mui/material/CssBaseline'
import PokemonFilter2 from './PokemonFilter2'

const pokemonReducer = (state, action) => {
	switch (action.type) {
		case 'SET_POKEMONS':
			return { ...state, pokemons: action.payload }
		case 'SET_SELECTED_POKEMON':
			return { ...state, selectedPokemon: action.payload }
		case 'SET_FILTER':
			return { ...state, filter: action.payload }
		default:
			throw new Error('No action')
	}
}

function App2() {
	const [state, dispatch] = useReducer(pokemonReducer, {
		pokemons: [],
		selectedPokemon: null,
		filter: '',
	})

	// Fetch data
	useEffect(() => {
		fetch('starting-react/pokemon.json')
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type: 'SET_POKEMONS',
					payload: data,
				})
			)
	}, [])

	if (!state.pokemons) {
		return <div>Data loading</div>
	}

	return (
		<PokemonContext2.Provider value={{ state, dispatch }}>
			<CssBaseline />
			<PageContainer
				style={{
					maxWidth: 800,
					margin: 'auto',
				}}
			>
				<Title>Pokemon Search</Title>
				<TwoColumnsLayout>
					<div>
						<PokemonFilter2 />
						<PokemonTable2 />
					</div>
					{<PokemonInfo2 />}
				</TwoColumnsLayout>
			</PageContainer>
		</PokemonContext2.Provider>
	)
}

export default App2
