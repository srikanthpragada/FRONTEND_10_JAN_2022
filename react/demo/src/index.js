import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Product from './basics/Product'
 

ReactDOM.render(
  <React.StrictMode>
    <Product name="MacBook Pro" price="125000" />
    <Product name="MacBook Air" price="100000" />
  </React.StrictMode>,
  
  document.getElementById('root')
);
 
