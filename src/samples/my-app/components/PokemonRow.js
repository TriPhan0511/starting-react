import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import PokemonContext from '../PokemonContext'

function PokemonRow({ pokemon }) {
  const { dispatch } = useContext(PokemonContext)
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button
          variant='contained'
          onClick={() => {
            dispatch({
              type: 'SET_SELECTED_POKEMON',
              payload: pokemon,
            })
          }}
        >
          More Infomation
        </Button>
      </td>
    </tr>
  )
}

export default PokemonRow
