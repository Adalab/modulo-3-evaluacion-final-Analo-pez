import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const htmlCode = props.characters.map((character, index) => {
        return <CharacterCard
            key={index}
            image={character.image}
            name={character.name}
            species={character.species} />
    });
    return (
        <section className="list">{htmlCode} </section>);
};

export default CharacterList;