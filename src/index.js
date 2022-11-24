import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ReactMemoizationSample from './samples/react-memoization/ReactMemoizationSample'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ReactMemoizationSample />)
// root.render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<MyApp />
// 		{/* <App /> */}
// 	</React.StrictMode>
// )
