import React from 'react';
import PokemonRow from './PokemonRow';

const PokedexTable = (props) => {
  const { pokemonArray } = props;
  return (
    <div>
      <h1>Pokedex Table</h1>
      {pokemonArray.map((pokemon, index) => {
        return <PokemonRow key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokedexTable;
