import React from 'react'

import ReactDOM from 'react-dom/client'

import "./index.css"
import "./reset.css"

import "./i18n"

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    
)
