import React from "react";
import "../css/mapPanel.css";
import BigLogo from "./bigLogo.jsx";
import PlayButton from "./playButton.jsx";
import Map from "./map.jsx";

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
                        <Map mapName="Border"/>
                        <Map mapName="Theme Park"/>
                        <Map mapName="Hereford Base"/>
                    </div>
                </div>
                <PlayButton linkUrl="/game" buttonText="Play"/>
            </div>
        );
    }
}

export default MapPanel;