import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ReactMemoizationSample from './samples/react-memoization/ReactMemoizationSample'
import App2 from './samples/useReducer-useContext-hooks/App2'
import App3 from './samples/useMemo-useCallback-hooks/App3'
import MemoApp from './samples/useMemo-useCallback-hooks/memo/MemoApp'
import MemoApp2 from './samples/useMemo-useCallback-hooks/memo/MemoApp2'
import { CalculateFactorial } from './samples/useMemo-useCallback-hooks/useMemo-hook/useMemoSample'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<CalculateFactorial />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<MyApp />
// 		{/* <App /> */}
// 	</React.StrictMode>
// )
