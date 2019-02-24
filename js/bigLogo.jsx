import React from 'react';
import bigLogoImage from "../images/bigLogo.png";

class BigLogo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.componentStyle =
            {

            }
    }

    render()
    {
        return <img style={this.componentStyle} src={bigLogoImage}/>;
    }

}

export default BigLogo;