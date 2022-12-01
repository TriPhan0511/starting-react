import React, { useContext } from 'react'

import PokemonContext from '../PokemonContext'
import PokemonRow from './PokemonRow'
import { Input } from './StyledComponents'

function PokemonTable() {
  const {
    state: { pokemons, filter },
    dispatch,
  } = useContext(PokemonContext)
  return (
    <div>
      <Input
        type='text'
        value={filter}
        onChange={(e) =>
          dispatch({
            type: 'SET_FILTER',
            payload: e.target.value,
          })
        }
      />
      <table width='100%'>
        <thead>
          <tr style={{ fontSize: 20 }}>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .slice(0, 20)
            .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
            .map((pokemon) => (
              <PokemonRow key={pokemon.id} pokemon={pokemon} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonTable
