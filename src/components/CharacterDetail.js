import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Main.scss';

const CharacterDetail = props => {

    return (
        <>
            <nav className="rtn"><Link to="/"><span>Volver</span> </Link ></nav>
            <div className="modal" >
                <div className="modal__dialog">
                    <div className="modal__content" >
                        <section>
                            <img className="card__img2" src={props.image} alt={props.name} />
                            <h2 className="card__content">{props.name}</h2>
                            <ul className="card__content">
                                <li>Species: {props.species}</li>
                                <li>Planet: {props.planet}</li>
                                <li>Status: {props.status}</li>
                                <li className="episodeList">Episodes: {props.episode.length}</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharacterDetail;