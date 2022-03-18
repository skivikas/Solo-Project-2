import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'


const Buttons = (props) => { 
    const navigate = useNavigate();
 
        return (
            <div>
                <ul id="steps">
                    <li><article>Step 1: Enter Zip Code</article></li>
                    <li><article>Step 2: Pick Your Crops</article></li>
                    <li><article>Step 3: Plan Your Garden</article></li>
                </ul>
                <button id="start" onClick={() => navigate("/step1")}>Get Started!</button>
             
            </div>
        )
}

export default Buttons;