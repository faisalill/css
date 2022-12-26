import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import themeReducer from './features/Theme'
const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
