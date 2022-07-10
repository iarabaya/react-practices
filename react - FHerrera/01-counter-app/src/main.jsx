import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterApp from './CounterApp'
import { FirstApp } from './FirstApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='hola, soy goku' subtitle={123}/> */}
		<CounterApp value={120}/>
  </React.StrictMode>
)
