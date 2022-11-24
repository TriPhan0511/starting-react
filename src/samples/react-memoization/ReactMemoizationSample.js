import React, { useState, memo } from 'react'

function Swatch({ color }) {
	console.log(`Swatch rendered ${color}`)
	return (
		<div
			style={{
				margin: 2,
				width: 75,
				height: 75,
				background: color,
			}}
		></div>
	)
}

const MemoedSwatch = memo(Swatch)

function ReactMemoizationSample() {
	const [appRenderIndex, setAppRenderIndex] = useState(0)
	const [color, setColor] = useState('red')

	console.log(`App rendered ${appRenderIndex}`)
	return (
		<div className='ReactMemoizationSample'>
			<div>
				<button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
					Re-render App
				</button>
				<button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
					Change color
				</button>
			</div>
			<div>
				<MemoedSwatch color={color} />
			</div>
		</div>
	)
}

export default ReactMemoizationSample
