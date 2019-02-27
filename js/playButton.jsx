import React from 'react';
import "../css/playButton.css";


class PlayButton extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return <button className="playButton">
            Play
        </button>;
    }

}

export default PlayButton;