import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import Discount from './basics/Discount'
//import Courses from './10-feb/Courses'

import Cart from './pc/Cart'
import Inches from './basics/Inches'
import ListBooks from './ajax/ListBooks'
import ShowBooks from './ajax/ShowBooks'
import FirstDemo from './routing/FirstDemo'
import SecondDemo from './routing/SecondDemo'
import Contacts from './routing/Contacts'
import Country from './ajax/Country'


ReactDOM.render(
  <React.StrictMode>
      <Contacts />
  </React.StrictMode>,
  
  document.getElementById('root')
);
 
