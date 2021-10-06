import React from 'react';
// import {Card, Button} from 'react-bootstrap';

export const PokemonTag = ({id, image, name, type }) => {

    const style = `thumb-container ${type}`
    return (
        <>
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Tipo: {type}</small>
                <button>Ver más</button>
            </div>
        </div>
        </>
    )
}

