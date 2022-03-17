import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Crops from './cropCard.js';

const Step2 = (props) => {
    const navigate = useNavigate();
    //setCards is a function used to update cards 
    //cards is now a variable inside of state initialized to an empty array
    const [cards, setCards] = useState([]);

    //fetch request to /step2 here 

    React.useEffect(function effectFunction () {
        fetch('http://localhost:3000/step2', {
            header: {'Access-Control-Allow-Origin': '*'}
        })
        .then(response => response.json())
        .then((data) => setCards(data))
        .catch(err => console.log('Could not fetch plant cards'));
    })

    const crops = cards.map((el, i) => <Crops key={i} info={el}/>)

    return (
        <div id="step2">
            <h3>Step 2: Pick Your Crops</h3>
            <p>These crops are the best suited for your area</p>
            <p>Select the crops you would like to add to your garden plan or select add crop below!</p>
            <div id="crops">
                {crops}
            </div>
            <div id="buttons2">
                <button type="button">Add Crop</button>
                <button type="button" onClick={() => navigate("/step3")}>Next</button>
            </div>
        </div>
    )
}

export default Step2;

