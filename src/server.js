import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import createStore from 'redux'
import App from './components/app'
module.exports = function render(initialState) {
  // Model the initial state
  const store = createStore();
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );
const preloadedState = store.getState()
return {content, preloadedState};
}