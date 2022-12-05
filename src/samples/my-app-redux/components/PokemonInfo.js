import React from 'react'
import { useSelector } from 'react-redux'

function PokemonInfo() {
	const {
		name: { english },
		base,
	} = useSelector((state) => state.selectedPokemon)
	return (
		<div style={{ textAlign: 'left', marginTop: 30, fontSize: 20 }}>
			<h2 style={{ textAlign: 'center' }}>{english}</h2>
			<table width='100%'>
				<tbody>
					{Object.keys(base)?.map((key) => {
						return (
							<tr key={key}>
								<td>{key}</td>
								<td>{base[key]}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default PokemonInfo
