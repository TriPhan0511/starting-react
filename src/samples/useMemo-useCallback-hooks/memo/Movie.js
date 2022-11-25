import React, { memo } from 'react'

// link: https://dmitripavlutin.com/use-react-memo-wisely/

// React.memo() is a higher order component.
// When React.memo()wraps a component,
// React memoizes the rendered output of the wrapped component then skip unnecessary renderings.

// When a component is wrapped in React.memo(), React renders the component and memoizes the result.
// Before the next render, if the new props are the same,
// React reuses the memoized result skipping the nexr rendering.

export function Movie({ title, releaseDate, memo }) {
	console.log(`${memo ? '<MemoizedMovie>' : '<Movie>'} rendered`)
	return (
		<div>
			<div>Movie title: {title}</div>
			<div>Release date: {releaseDate}</div>
		</div>
	)
}

export const MemoizedMovie = memo(Movie)
