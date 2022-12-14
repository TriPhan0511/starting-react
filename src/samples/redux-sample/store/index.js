import { createStore } from 'redux'

const initialState = {
	// posts: [],
	posts: [{ id: 1, title: 'This is the first post.' }],
	signUpModal: {
		open: false,
	},
}

// const reducer = (state = initialState, action) => {
// 	if (action.type === 'ADD_POST') {
// 		return Object.assign({}, state, {
// 			posts: state.posts.concat(action.payload),
// 		})
// 	}
// 	return state
// }

const reducer = (state = initialState, action) => {
	if (action.type === 'ADD_POST') {
		return { ...state, posts: [...state.posts, action.payload] }
	}
	return state
}

const store = createStore(reducer)

export default store
