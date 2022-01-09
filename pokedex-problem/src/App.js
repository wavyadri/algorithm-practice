import './App.css';
import PokemonRow from './components/PokemonRow';

const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: ['grass'],
  sprite: 'https://pokemon.com/pictures/bulbasaur.png',
};

function App() {
  return (
    <div className='App'>
      <PokemonRow pokemon={bulbasaur} />
    </div>
  );
}

export default App;
