import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from './cropCard.js';


const Crops = (props) => { 
    //use navigate to move to step3 with onclick of button
    // const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('/step2/')
    //     .then(res => res.json())
    //     .then()
    // })
 
        return (
            <div className="crops">
                <Card></Card>
            </div>
        )
}

export default Crops;

