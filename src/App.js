import './App.css'
import React, { createContext, useState } from 'react'
import { CssBaseline } from '@mui/material'
import {
	Title,
	TwoColumnsLayout,
	PageContainer,
} from './components/StyledComponents'

import PokemonContext from './PokemonContext'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'

function App() {
	const [filter, setFilter] = useState('')
	const [pokemon, setPokemon] = useState([])
	const [selectedPokemon, setSelectedPokemon] = useState(null)

	// Asynchronous request (at the mounting stage)
	React.useEffect(() => {
		fetch('http://localhost:3001/starting-react/pokemon.json')
			.then((resp) => resp.json())
			.then((data) => setPokemon(data))
	}, [])

	if (!pokemon) {
		return <div>Loading data</div>
	}

	return (
		<PokemonContext.Provider
			value={{
				filter,
				setFilter,
				pokemon,
				setPokemon,
				selectedPokemon,
				setSelectedPokemon,
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
