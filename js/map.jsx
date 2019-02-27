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
            if(this.props.isSelected === true)
                this.mapImage = <img src={Border} id="border"/>
            else
                this.mapImage = <img src={Border}/>
        }
        else if (this.props.mapName === "Theme Park")
        {
            if(this.props.isSelected === true)
                this.mapImage = <img src={ThemePark} id="themePark"/>
            else
                this.mapImage = <img src={ThemePark}/>
        }
        else if (this.props.mapName === "Hereford Base")
        {
            if(this.props.isSelected === true)
                this.mapImage = <img src={Hereford} id="hereford"></img>;
            else
                this.mapImage = <img src={Hereford}></img>;
        }
        if(this.props.isSelected === true)
            this.mapSpan = <span className="selectedMapSpan">{this.props.mapName}</span>;
        else
            this.mapSpan = <span className="notSelectedMapSpan">{this.props.mapName}</span>;
    };

    render()
    {
        this.selectMap();
        return <div className="singleMap">
            {this.mapImage}
            {this.mapSpan}
        </div>
    }
}

export default Map;