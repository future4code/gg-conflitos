import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function App () {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(data);
      } catch(e) {
        console.log(e);
      }
    }

    fetch();
  }, [])

  return (
    <div>
      <h1>Pokemons</h1>
      
    </div>
  );

}

export default App;
