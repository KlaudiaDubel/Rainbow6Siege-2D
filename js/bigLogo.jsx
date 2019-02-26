import React from 'react';
import bigLogoImage from "../images/bigLogo.png";
import "../css/bigLogo.css";

class BigLogo extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <img className="bigLogo" src={bigLogoImage}/>;
    }

}

export default BigLogo;