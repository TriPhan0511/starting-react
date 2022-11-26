import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Stopwatch from './samples/useRef-hook/usecase-1-2-stopwatch/Stopwatch'
import InputFocus from './samples/useRef-hook/usecase-2-focusing-an-input/InputFocus'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<InputFocus />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<MyApp />
// 		{/* <App /> */}
// 	</React.StrictMode>
// )
