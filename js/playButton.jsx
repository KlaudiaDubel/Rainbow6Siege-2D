import React from 'react';
import "../css/playButton.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from '@fortawesome/free-solid-svg-icons';


class PlayButton extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return <button className="playButton">
            <FontAwesomeIcon icon={faPlay}/>
        </button>;
    }

}

export default PlayButton;