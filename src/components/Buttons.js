import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'


const Buttons = (props) => { 
    const navigate = useNavigate();
 
        return (
            <div className="steps">
                 <ul id="buttons">
                    <li><button type = "button">Step 1: Enter Zip Code</button></li>
                    <li><button type = "button">Step 2: Pick Your Crops</button></li>
                    <li><button type = "button">Step 3: Plan Your Plot</button></li>
                </ul>
                <button type="button" onClick={() => navigate("/step1")}>Get Started!</button>
             
            </div>
        )
}

export default Buttons;