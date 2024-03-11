import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import {Provider} from 'react-redux'

import App from './App'

import './App.css'

const store = configureStore({
  reducer: {counter: counterReducer},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
