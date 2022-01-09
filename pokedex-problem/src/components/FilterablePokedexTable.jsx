import React from 'react';
import PokedexTable from './PokedexTable';
import PokemonTypeSelection from './PokemonTypeSelection';

const FilterablePokedexTable = () => {
  return (
    <div>
      <h1>Filterable pokemon</h1>
      <PokemonTypeSelection />
      {/* <PokedexTable /> */}
    </div>
  );
};

export default FilterablePokedexTable;
