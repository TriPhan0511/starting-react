import React from 'react'
import { MemoizedMovie, Movie } from './Movie'

function MovieViewsRealtime({ title, releaseDate, views }) {
	return (
		<div>
			<MemoizedMovie title={title} releaseDate={releaseDate} />
			<div>Movie views: {views}</div>
		</div>
	)
}

export default MovieViewsRealtime
