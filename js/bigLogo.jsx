import React from 'react';
import bigLogoImage from "../images/bigLogo.png";

class BigLogo extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <img src={bigLogoImage}/>;
    }

}

export default BigLogo;