import './App.css'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <button onClick={onSelect}>Select!</button>
      {/* <button onClick={() => onSelect(pokemon)}>Select!</button> */}
    </td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func,
}

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table width='100%'>
      <tbody>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    HP: PropTypes.number.isRequired,
    'Sp. Attack': PropTypes.number.isRequired,
    'Sp. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}

// Styled Components
const Title = styled.h1`
  text-align: center;
`
const TwoColumnsLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
`
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`
const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`

function App() {
  const [filter, setFilter] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  // Asynchronous request
  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((resp) => resp.json())
      .then((data) => setPokemon(data))
  }, [])

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnsLayout>
        <div>
          <Input value={filter} onChange={(e) => setFilter(e.target.value)} />
          {/* <input value={filter} onChange={(e) => setFilter(e.target.value)} /> */}
          <table width='100%'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                .map((pokemon) => (
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={() => setSelectedItem(pokemon)}
                    // onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnsLayout>
    </Container>
  )
}

export default App
