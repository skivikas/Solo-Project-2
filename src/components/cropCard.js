import React from 'react';

const Cards = (props) => { 
    const values = {
        name: 'Tomato',
        sowing: 'Direct',
        sun: 'Full',
        companions: 'Garlic and Basil',
        spread: '15cm',
        row: '6cm',
        height: '60cm'
    };

    
        return (
            <article className="crop card">
                <div className="crop header">
                    <h3>Name: {values.name}</h3>
                </div>
                <ul>
                    <li>Sowing: {values.sowing}</li>
                    <li>Sun: {values.sun}</li>
                    <li>Companions: {values.companions}</li>
                    <li>Spread: {values.spread}</li>
                    <li>Row: {values.row}</li>
                    <li>Height: {values.height}</li>
                </ul>
            </article>
        )
}

export default Cards;