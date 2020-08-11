import React from 'react';
import '../stylesheets/Main.scss';

const Filters = props => {
    const handleInputChangeName = ev => {
        props.handleFilterName({
            key: 'filterName',
            value: ev.target.value
        });
    }
    const handleInputChangeLocation = ev => {
        props.handleFilterLocation({
            key: 'filterLocation',
            value: ev.target.value
        });
    }
    const handlePreventClick = ev => {
        ev.preventDefault();
    };

    return (

        <form className="filter" onSubmit={handlePreventClick}>
            <label className="filter__label">Encuentra tu personaje</label>
            <input className="filter__input"
                placeholder="Buscar por nombre"
                type="text"
                id="filterName"
                value={props.filterName}
                onChange={handleInputChangeName}></input>
            <input className="filter__input"
                placeholder="Buscar por localización"
                type="text"
                id="filterLocation"
                value={props.filterLocation}
                onChange={handleInputChangeLocation}></input>
        </form>

    );
}

export default Filters;