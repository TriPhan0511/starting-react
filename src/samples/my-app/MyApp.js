import React, { useEffect, useReducer, useState } from 'react'
import { PageContainer, TwoColumnLayout, Title } from './components/StyledComponents'
import PokemonContext from './PokemonContext'

import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'

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

function MyApp() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemons: [],
    selectedPokemon: null,
    filter: '',
  })
  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch('starting-react/pokemon.json')
      const data = await response.json()
      dispatch({
        type: 'SET_POKEMONS',
        payload: data,
      })
    }
    fetchPokemons()
  }, [])
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      <PageContainer>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <PokemonTable />
          {state.selectedPokemon && <PokemonInfo />}
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  )
}

export default MyApp
