import React from 'react';
import "../css/playButton.css";
import{
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";


class PlayButton extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        /*return <Link to={this.props.linkUrl}>
            <button className="playButton">
                {this.props.buttonText}
        </button>
        </Link>;*/
        return <button className="playButton">
                {this.props.buttonText}
            </button>;
    }

}

export default PlayButton;