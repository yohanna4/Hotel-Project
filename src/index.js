import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
  <RoomProvider>
     <App />
  </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
