import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Adrenaline } from 'adrenaline';
import networkLayer from './networkLayer';

window.networkLayer = networkLayer;

ReactDOM.render(
  <Adrenaline networkLayer={networkLayer}>
    <App />
  </Adrenaline>,
  document.getElementById('root')
);
