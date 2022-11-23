import './App.css'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

// PokemonRow component
const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(', ')}</td>
		<td>
			<Button variant='contained' color='primary' onClick={onSelect}>
				Select
			</Button>
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

// PokemonInfo component
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

// Styled Components (CSS in JS)
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

class AppClassComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: '',
			pokemon: [],
			selectedItem: null,
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/starting-react/pokemon.json')
			.then((resp) => resp.json())
			.then((pokemon) => this.setState({ ...this.state, pokemon }))
	}

	render() {
		return (
			<Container>
				<Title>Pokemon Search</Title>
				<TwoColumnsLayout>
					<div>
						<Input
							value={this.state.filter}
							onChange={(e) => this.setState({ ...this.state, filter: e.target.value })}
						/>
						<table width='100%'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
								</tr>
							</thead>
							<tbody>
								{this.state.pokemon
									.filter((pokemon) => pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))
									.map((pokemon) => (
										<PokemonRow
											key={pokemon.id}
											pokemon={pokemon}
											onSelect={() => this.setState({ ...this.state, selectedItem: pokemon })}
										/>
									))}
							</tbody>
						</table>
					</div>
					{this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} />}
				</TwoColumnsLayout>
			</Container>
		)
	}
}

export default AppClassComponent
