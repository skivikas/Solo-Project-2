import React, { Component } from 'react';
import Buttons from './Buttons.js';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Home Grow</h1>
                <Buttons/>
            </div>
        )
    }
}

export default App;