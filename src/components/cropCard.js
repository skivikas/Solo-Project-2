import React, { useState } from 'react';
import "../styles.css";

const Crops = (props) => { 
    const [style, setStyle] = useState("article");

    const { plant_id, plant_name, sowing, sun, companions, spread, row, height } = props.info;

    const changeColor = () => {
        console.log("you just clicked");
        setStyle("article2")
    }
  

        return (
            <article className="crop_card" onClick={changeColor}>
                <div className="crop header">
                </div>
                <ul id="card_details">
                    <li><b>Name: </b>{plant_name}</li>
                    <li><b>Sowing: </b>{sowing}</li>
                    <li><b>Sun: </b>{sun}</li>
                    <li><b>Companions: </b>{companions}</li>
                    <li><b>Spread: </b>{spread}</li>
                    <li><b>Row: </b>{row}</li>
                    <li><b>Height: </b>{`${height}cm`}</li>
                </ul>
            </article>
        )
}

export default Crops;