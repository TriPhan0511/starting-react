import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ReactMemoizationSample from './samples/react-memoization/ReactMemoizationSample'
import App2 from './samples/useReducer-useContext-hooks/App2'
import App3 from './samples/useMemo-useCallback-hooks/App3'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App3 />)
// root.render(<App2 />)
// root.render(<ReactMemoizationSample />)
// root.render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<MyApp />
// 		{/* <App /> */}
// 	</React.StrictMode>
// )
