import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'

function PokemonInfo() {
  const {
    state: {
      selectedPokemon: {
        name: { english },
        base,
      },
    },
  } = useContext(PokemonContext)
  return (
    <div style={{ textAlign: 'left', marginTop: 30, fontSize: 20 }}>
      <h3 style={{ textAlign: 'center' }}>{english}</h3>
      <table width='100%'>
        {Object.keys(base).map((key) => (
          <tr>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default PokemonInfo
