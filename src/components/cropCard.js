import React from 'react';

const Crops = (props) => { 

    const { plant_id, plant_name, sowing, sun, companions, spread, row, height } = props.info;
  

        return (
            <article className="crop_card">
                <div className="crop header">
                </div>
                <ul id="card_details">
                    <li>Name: {plant_name}</li>
                    <li>Sowing: {sowing}</li>
                    <li>Sun: {sun}</li>
                    <li>Companions: {companions}</li>
                    <li>Spread: {spread}</li>
                    <li>Row: {row}</li>
                    <li>Height: {`${height}cm`}</li>
                </ul>
            </article>
        )
}

export default Crops;