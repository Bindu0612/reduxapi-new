import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewApp from './NewApp';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Provider store={store}>
  <NewApp /> </Provider>,
  document.getElementById('root')
);

