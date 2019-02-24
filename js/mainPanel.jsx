import React from 'react';
import BigLogo from './bigLogo.jsx';
import PlayButton from './playButton.jsx';



class MainPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.componentStyle =
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                background: "linear-gradient(to bottom, rgba(19,19,19,1) 0%, rgba(71,71,71,1) 54%, rgba(71,71,71,1) 100%)",
                width: "1200px",
                height: "800px",
            }
    }

    render()
    {
        return <div style={this.componentStyle}>
            <BigLogo/>
            <PlayButton/>
        </div>;
    }

}

export default MainPanel;