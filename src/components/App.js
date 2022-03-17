import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from './Buttons.js';
import Step1 from './step1.js';
import Step2 from './step2.js'
import Step3 from './step3.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
      
            <div className="home">
                <h1>HOME GROW</h1>
                <Router>
                    <Routes>
                        <Route path="/" element={<Buttons/>}/>
                        <Route path="/step1" element={<Step1/>}/>
                        <Route path="/step2" element={<Step2/>}/>
                        <Route path="/step3" element={<Step3/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;