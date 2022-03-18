import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'



const Zip = (props) => {
    const navigate = useNavigate();
    // const [zip] = useState(null);

    // useEffect(() => {
    //     const zip = Number(e.target[0].value);
    //     console.log(zip)
    //     console.log('WE ARE HERE');
    //     fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zip}`, {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "plant-hardiness-zone.p.rapidapi.com",
	// 	"x-rapidapi-key": "20b2e69d13mshb7104550fb487fbp1a2f2cjsn412b982366db"}
    //     })
    //     .then(response => {
    //         console.log(response);
    //         //response is an object with 'hardines_zone as property
    //     })
    //     .catch(err => {
    //         console.error('MISTAKE');
    //     });

        
    // })


    // const getZip = (e) => {

    //     const zip = Number(e.target[0].value);
    //     console.log(zip)
    //     console.log('WE ARE HERE');
    //     fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zip}`, {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "plant-hardiness-zone.p.rapidapi.com",
	// 	"x-rapidapi-key": "20b2e69d13mshb7104550fb487fbp1a2f2cjsn412b982366db"}
    //     })
    //     .then(response => {
    //         console.log(response);
    //         //response is an object with 'hardines_zone as property
    //     })
    //     .catch(err => {
    //         console.error('MISTAKE');
    //     });
    // }

    return (
        <div>
            {/* <form id="zip" onSubmit={getZip}> */}
            <form id="zip">
                <label id="label">Please enter your zip code: </label>
                <input type="text" id="zip"></input>
                <input id="submit" type="submit"></input>
            </form>
            <button id="zip_submit" onClick={() => navigate("/step2")}>Next</button>
        </div>

    )
}

export default Zip;
