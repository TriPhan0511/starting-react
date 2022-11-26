import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './samples/useEffect-hook/RepeatMessage'
import FetchPokemons from './samples/useEffect-hook/FetchPokemons'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FetchPokemons />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<MyApp />
// 		{/* <App /> */}
// 	</React.StrictMode>
// )
