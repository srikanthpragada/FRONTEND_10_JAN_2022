import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import Discount from './basics/Discount'
//import Courses from './10-feb/Courses'

import Cart from './pc/Cart'
import Inches from './basics/Inches'
import ListBooks from './ajax/ListBooks'
import ShowBooks from './ajax/ShowBooks'


ReactDOM.render(
  <React.StrictMode>
      <ShowBooks />
  </React.StrictMode>,
  
  document.getElementById('root')
);
 
