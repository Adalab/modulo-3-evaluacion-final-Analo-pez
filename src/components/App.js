import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getApiData from '../services/AppAPI';
import Header from './Header'
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterLocation, setFilterLocation] = useState("");



  useEffect(
    () => {
      getApiData().then(data => {
        setCharacters(data);
      });
    }, []);

  const handleFilterName = data => {
    setFilterName(data.value);
  }
  const handleFilterLocation = data => {
    setFilterLocation(data.value);
  }

  const renderCharacterDetail = props => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(character => character.id === routeCharacterId);
    if (character) {
      return (
        < CharacterDetail
          image={character.image}
          name={character.name}
          species={character.species}
          planet={character.origin.name}
          episode={character.episode}
          status={character.status}
        />
      );
    }
  };


  const filterCharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(filterName.toLowerCase())
  }).filter(character => {
    return character.location.name.toLowerCase().includes(filterLocation.toLowerCase())
  })



  return (
    <div className="App " >
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
            filterLocation={filterLocation}
            handleFilterLocation={handleFilterLocation}
          />
          <CharacterList characters={filterCharacters} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div >
  );
}


export default App;



