import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import App from './App';
import configureStore from './store';

import * as serviceWorker from './serviceWorker';
import {PersistGate} from 'redux-persist/lib/integration/react';
import './layout/index.scss';
const store = configureStore();

render(
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
