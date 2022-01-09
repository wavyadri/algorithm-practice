import './App.css';
import { useState, useEffect } from 'react';
import PokemonRow from './components/PokemonRow';
import FilterablePokedexTable from './components/FilterablePokedexTable';
import axios from 'axios';

// const pokemonArray = [
//   {
//     id: 1,
//     name: 'Bulbasaur',
//     types: ['grass'],
//     sprite: 'https://pokemon.com/pictures/bulbasaur.png',
//   },
//   {
//     id: 2,
//     name: 'Charmander',
//     types: ['fire'],
//     sprite: 'https://pokemon.com/pictures/bulbasaurr.png',
//   },
// ];

function App() {
  const [pokemonArray, setPokemonArray] = useState(null);
  const fetchData = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((res) => {
        const results = res.data.results;
        setPokemonArray(results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      {pokemonArray && (
        <>
          <PokemonRow pokemon={pokemonArray[0]} />
          <FilterablePokedexTable pokemonArray={pokemonArray} />
        </>
      )}
    </div>
  );
}

export default App;
