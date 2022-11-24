import React, { useEffect, useReducer, useState } from 'react'
import {
	PageContainer,
	Title,
	TwoColumnsLayout,
} from './components/StyledComponents'

import MyPokemonFilter from './components/MyPokemonFilter'
import MyPokemonContext from './MyPokemoContext'
import MyPokemonTable from './components/MyPokemonTable'
import Button from '@mui/material/Button'
import MyPokemonInfo from './components/MyPokemonInfo'

function MyApp() {
	const myPokemonReducer = (state, action) => {
		switch (action.type) {
			case 'SET_FILTER':
				return { ...state, filter: action.payload }
			case 'SET_POKEMONS':
				return { ...state, pokemons: action.payload }
			case 'SET_SELECTED_POKEMON':
				return { ...state, selectedPokemon: action.payload }
			default:
				throw new Error('No action')
		}
	}

	const [state, dispatch] = useReducer(myPokemonReducer, {
		filter: '',
		pokemons: [],
		selectedPokemon: null,
	})

	useEffect(() => {
		fetch('starting-react/pokemon.json')
			.then((data) => data.json())
			.then((pokemons) =>
				dispatch({
					type: 'SET_POKEMONS',
					payload: pokemons,
				})
			)
	}, [])

	return (
		<MyPokemonContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			<PageContainer>
				<Title>Pokemon Search</Title>
				<TwoColumnsLayout>
					<div>
						<MyPokemonFilter />
						<MyPokemonTable />
					</div>
					{<MyPokemonInfo />}
				</TwoColumnsLayout>
			</PageContainer>
		</MyPokemonContext.Provider>
	)
}

export default MyApp
