import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import MyApp from './samples/my-app-redux/MyApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <MyAp />
//   </React.StrictMode>
// )
