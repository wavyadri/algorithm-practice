import React from 'react';
import PokemonRow from './PokemonRow';

const PokedexTable = (props) => {
  const { pokemonArray } = props;
  return (
    <div>
      <h1>Pokedex Table</h1>
      {pokemonArray.map((pokemon) => {
        return <PokemonRow key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokedexTable;
