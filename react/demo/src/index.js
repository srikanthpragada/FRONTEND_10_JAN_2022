import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Discount from './basics/Discount'
 
function Welcome() {
    return <h1>Welcome!!!</h1>
}

ReactDOM.render(
  <React.StrictMode>
     <Discount  />
  </React.StrictMode>,
  
  document.getElementById('root')
);
 
