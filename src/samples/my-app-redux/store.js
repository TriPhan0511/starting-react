import { createStore } from 'redux'

const pokemonReducer = (
	state = {
		pokemons: [],
		selectedPokemon: null,
		filter: '',
	},
	action
) => {
	switch (action.type) {
		case 'SET_POKEMONS':
			return { ...state, pokemons: action.payload }
		case 'SET_SELECTED_POKEMON':
			return { ...state, selectedPokemon: action.payload }
		case 'SET_FILTER':
			return { ...state, filter: action.payload }
		default:
			return state
	}
}

const store = createStore(pokemonReducer)

export default store
