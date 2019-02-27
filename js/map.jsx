import React from "react";
import Border from "../images/Border.png";
import ThemePark from "../images/ThemePark.png";
import Hereford from "../images/Hereford.png";
import "../css/map.css";


class Map extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    selectMap = () => {
        if (this.props.mapName === "Border")
        {
            this.mapImage = <img src={Border} id="border"/>
        }
        else if (this.props.mapName === "Theme Park")
        {
            this.mapImage = <img src={ThemePark} id="themePark"/>
        }
        else if (this.props.mapName === "Hereford Base")
        {
            this.mapImage = <img src={Hereford} id="hereford"></img>;
        }
    };

    render()
    {
        this.selectMap();
        return <div className="singleMap">
            {this.mapImage}
            <span>{this.props.mapName}</span>
        </div>
    }
}

export default Map;