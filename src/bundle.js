import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from 'redux'
import App from './components/app'
const store = createStore();
render(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)