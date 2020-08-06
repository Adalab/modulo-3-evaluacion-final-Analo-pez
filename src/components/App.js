import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getApiData from '../services/AppAPI';
import Header from './Header'
import Filters from './Filters';
import CharacterList from './CharacterList';
// import CharacterCard from './CharacterCard';
// import CharacterDetail from './CharacterDetail';


const App = () => {
  const [characters, setCharacters] = useState([]);


  useEffect(
    () => {
      getApiData().then(data => {
        setCharacters(data);
      });
    },
    []);


  return (
    <div className="App ">
      <Header />
      <Filters />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;



