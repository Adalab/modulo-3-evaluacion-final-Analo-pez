import React from 'react';
import '../stylesheets/Main.scss';

const Filters = props => {
    const handleFilterName = ev => {
        props.handleFilters({
            key: 'filterName',
            value: ev.target.value
        });
    };
    return (

        <form className="filter">
            <label className="filter__label">Encuentra tu personaje</label>
            <input className="filter__input"
                id="filterName"
                value={props.filterName}
                onChange={handleFilterName}></input>
        </form>

    );
}

export default Filters;