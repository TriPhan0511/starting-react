import React, { useEffect, useState } from 'react'
import MovieViewsRealtime from './MovieViewsRealtime'

function MemoApp2() {
	const [views, setViews] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			setViews((current) => current + 1)
		}, 2000)
		return () => clearInterval(id)
	}, [])

	return (
		<MovieViewsRealtime title='Heat' releaseDate='Nov 27, 2022' views={views} />
	)
}

export default MemoApp2
