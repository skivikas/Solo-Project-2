import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step2 from './step2.js'
import Zip from './Zip.js'


const Step1 = (props) => {
    const navigate = useNavigate();
    return (
        <div id="zip_page">
            <h3>Step 1: Determining Your Hardiness Zone</h3>
            <Zip/>

        </div>
    )
}

export default Step1;