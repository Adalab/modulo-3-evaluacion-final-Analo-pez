import React from 'react';
// import { Link } from 'react-router-dom';

const Product = props => {
    return (
        <article className="card">
            <img src={props.image} className="card__img" alt={props.name} />
            <h3 className="card__title">{props.name}</h3>
            <p className="card__description">{props.species} </p>
        </article>
    );
};

export default Product;