import React from "react";
import { useNavigate } from "react-router-dom";
import Crops from './crops.js';

const Step3 = (props) => {
    const navigate = useNavigate();

    return (
        <div id="step2">
            <h3>Step 3: Plan Your Garden</h3>
        </div>
    )
}

export default Step3;