import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="steps">
                 <ul>
                    <li><button type = "button">Step 1: Enter Zip Code</button></li>
                    <li><button type = "button">Step 2: Pick Your Crops</button></li>
                    <li><button type = "button">Step 3: Plan Your Plot</button></li>
                </ul>
                <button id ="start" type = "button">Get Started!</button>
            </div>
        )
    }
}

export default Buttons;