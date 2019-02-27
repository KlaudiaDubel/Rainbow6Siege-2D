import React from "react";
import "../css/mapPanel.css";
import BigLogo from "./bigLogo.jsx";
import Border from "../images/Border.png";
import ThemePark from "../images/ThemePark.png";
import Hereford from "../images/Hereford.png";
import PlayButton from "./playButton.jsx";

class MapPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="mapSlider">
                <div className="mapHeader">
                    <BigLogo/>
                    <h1>Choose a map</h1>
                </div>
                <div className="mapChoice">
                    <div className="maps">
                        <div className="singleMap">
                            <img src={Border} id="border"/>
                            <span>Border</span>
                        </div>
                        <div className="singleMap">
                            <img src={ThemePark} id="themePark"/>
                            <span>Theme Park</span>
                        </div>
                        <div className="singleMap">
                            <img src={Hereford} id="hereford"/>
                            <span>Hareford Base</span>
                        </div>
                    </div>
                </div>
                <PlayButton linkUrl="/game" buttonText="Play"/>
            </div>
        );
    }
}

export default MapPanel;