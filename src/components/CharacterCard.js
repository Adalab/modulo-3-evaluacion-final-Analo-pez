import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <article className="card" id={props.id}>
            <Link to={`/character/${props.id}`} className="card__btn">
                <img src={props.image} className="card__img" alt={props.name} />
                <h3 className="card__title">{props.name}</h3>
                <p className="card__description">{props.species} </p>
            </Link>
        </article>
    );
};

export default CharacterCard;