import React from 'react'
import store from './store/index'

import { Provider, useDispatch, useSelector } from 'react-redux'

function MyApp() {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts)

	return (
		<div>
			{posts?.map((post) => (
				<div key={post.id}>
					<div>{post.id}</div>
					<div>{post.title}</div>
					<button
						onClick={() =>
							dispatch({
								type: 'ADD_POST',
								payload: { id: 2, title: 'This is the second post.' },
							})
						}
					>
						Click here
					</button>
				</div>
			))}
		</div>
	)
}

export default () => (
	<Provider store={store}>
		<MyApp />
	</Provider>
)
