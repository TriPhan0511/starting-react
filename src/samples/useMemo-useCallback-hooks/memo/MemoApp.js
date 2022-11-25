import React, { useEffect, useState } from 'react'
import { MemoizedMovie, Movie } from './Movie'

function MemoApp() {
	const [, setToggle] = useState(true)

	useEffect(() => {
		const id = setInterval(() => {
			setToggle((toggle) => !toggle)
		}, 3000)
		return () => clearInterval(id)
	}, [])

	return (
		<>
			<MemoizedMovie title='Heat' releaseDate='December 15, 1995' memo={true} />
			<Movie title='Heat' releaseDate='December 15, 1995' memo={false} />
		</>
	)
}

export default MemoApp
