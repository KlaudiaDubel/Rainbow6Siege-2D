import React from 'react';
import buttonImage from "../images/bigLogo.png";

class PlayButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.componentStyle =
        {
            width: "10%",
            height: "10%",
        };
        this.imageStyle =
        {
            width: "100%",
            height: "100%",
        };
    }

    render()
    {
        return <button style={this.componentStyle}>
            <img style={this.imageStyle} src={buttonImage}/>
        </button>;
    }

}

export default PlayButton;