import './App.css'
import PropTypes from 'prop-types'
import pokemons from './pokemon.json'
import { useState } from 'react'

const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(', ')}</td>
		<td>
			<button onClick={() => onSelect(pokemon)}>Select!</button>
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

function App() {
	console.log(pokemons[0].base)
	const [filter, setFilter] = useState('')
	const [selectedItem, setSelectedItem] = useState(null)
	return (
		<div
			style={{
				margin: 'auto',
				width: 1000,
				paddingTop: '1rem',
			}}
		>
			<h1 className='title'>Pokemon Search</h1>
			<input value={filter} onChange={(e) => setFilter(e.target.value)} />
			<div
				style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '1rem' }}
			>
				<div>
					<table width='100%'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							{pokemons
								.filter((pokemon) =>
									pokemon.name.english
										.toLowerCase()
										.includes(filter.toLowerCase())
								)
								.map((pokemon) => (
									<PokemonRow
										key={pokemon.id}
										pokemon={pokemon}
										onSelect={(pokemon) => setSelectedItem(pokemon)}
									/>
								))}
						</tbody>
					</table>
				</div>
				{selectedItem && <PokemonInfo {...selectedItem} />}
			</div>
		</div>
	)
}

export default App
