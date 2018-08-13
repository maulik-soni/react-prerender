import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from 'redux'
import App from './components/app'
const state = window.__STATE__;
delete window.__STATE__;
const store = createStore();
hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)