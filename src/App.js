import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonFilter, setPokemonFilter] = useState("");

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const onFilterChange = (event) => {
    setPokemonFilter(event.target.value);
  }
  
  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon?search=${pokemonFilter}`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonData(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }, [pokemonFilter]);

  return (
    <div className="App">
      <h1>Backend Testing</h1>
      <hr/>
      <input value={pokemonFilter} onChange={onFilterChange}></input>
      <ol>
        {
          pokemonData?.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name.english}</li>
          ))
        }
      </ol>
    </div>
  );
}

export default App;
