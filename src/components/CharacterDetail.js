import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Main.scss';

const CharacterDetail = props => {
    return (
        <Link to="/">
            <div className="modal" id={props.id}>
                <div className="modal__dialog">
                    <div className="modal__content" >
                        <section>
                            <img className="card__img" src={props.image} alt={props.name} />
                            <h2 className="card__title">Personaje: {props.name}</h2>
                            <ul className="ml-1 mt-1">
                                <li>Planeta: {props.origin.name}</li>
                                <li>Episodios: {props.episode}</li>
                                <li>Estado: {props.status}</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default CharacterDetail;