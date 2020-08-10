import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from "prop-types";

const CharacterList = props => {
    if (props.characters.length === 0) {
        return <p className="Alert">No hay coincidencias</p>
    }
    const htmlCode = props.characters.map((character, index) => {
        return <CharacterCard
            key={index}
            id={character.id}
            image={character.image}
            name={character.name}
            species={character.species} />
    })

    return (
        <section className="list">{htmlCode} </section>);
};

CharacterList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    specie: PropTypes.string,
    origin: PropTypes.string,
    gender: PropTypes.string,
    episodes: PropTypes.number,
};



export default CharacterList;