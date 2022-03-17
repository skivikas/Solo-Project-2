import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Crops from './crops.js';

const Step2 = (props) => {
    const navigate = useNavigate();
    //setCards is a function used to update cards 
    //cards is now a variable inside of state initialized to an empty array
    const [cards, setCards] = useState([]);

    //fetch request to /step2 here 
    //perhaps change it to api? 
    React.useEffect(function effectFunction () {
        fetch('/step2')
        .then(response => response.json())
        .then(({data: cards}) => setCards(cards))
    })

    const crops = [];
    console.log(crops);
    for (let i = 0; i < cards.length; i++) {
        crops.push(<Crops/>)
    }

    return (
        <div id="step2">
            <h3>Step 2: Pick Your Crops</h3>
            <p>These crops are the best suited for your area</p>
            <p>Select all the crops you are interested in learned about or adding to your garden plan!</p>
            {/* <Crops/> */}
            {crops}
            <button type="button" onClick={() => navigate("/step3")}>Next</button>
        </div>
    )
}

export default Step2;

