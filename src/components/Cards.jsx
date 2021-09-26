import React from 'react';
import './Cards.css';
import SearchBar from './SearchBar.jsx';


import Card from './Card.jsx';

export default function Cards({cities, onClose, onSearch}) {
  return (
    <div className="main-container">
        <SearchBar
        onSearch={onSearch}
        />
        <div className='cards'>
        {!cities.length ? <h3 className="defaultMessage">Search for a new city!</h3> : cities.map(c => <Card
          key={c.id}
          id={c.id}
          //Temperature converted from kelvin to celsius
          max={Math.ceil(c.max - 273.15)}
          min={Math.ceil(c.min - 273.15)}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
    </div>
  
  );
}
