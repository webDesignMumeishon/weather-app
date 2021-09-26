import React from 'react';
import Logo from '../img/logoHenry.png'
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className=" local_nav navbar navbar-dark ">
      
      <Link className="navbar-brand" to='/about'>
        <span>Weather App</span>
      </Link>

      <Link className="navbar-brand" to='/'>
        <span>Cards</span>
      </Link>
     
    </nav>
  );
};

export default Nav;
