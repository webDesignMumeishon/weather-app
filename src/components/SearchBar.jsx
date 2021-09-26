import React, { useState } from "react";
import './SearchBar.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form className="formWrapper" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
