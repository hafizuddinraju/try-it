import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div>
            <img src={props.country.flags.png} alt="" />
            <h2>{props.country.name.common}</h2>
            
        </div>
    );
};

export default Country;