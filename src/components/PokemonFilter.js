import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import { Input } from './StyledComponents'

const PokemonFilter = () => {
	const { filter, setFilter } = useContext(PokemonContext)
	return <Input value={filter} onChange={(e) => setFilter(e.target.value)} />
}

export default PokemonFilter
