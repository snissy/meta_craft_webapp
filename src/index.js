import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import startThreeJS from "./components/threejsSystem/canvasPaintingScript";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

startThreeJS()





