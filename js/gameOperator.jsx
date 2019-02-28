import React from "react";
import AshImage from "../images/Ash_Trans.png";
import FuzeImage from "../images/Fuze_trans.png";
import FinkaImage from "../images/Finka_trans.png";
import MontyImage from "../images/Monty_trans.png";
import FrostImage from "../images/Frost_Trans.png";
import MuteImage from "../images/Mute_trans.png";
import ElaImage from "../images/Ela_trans.png";
import SmokeImage from "../images/Smoke_trans.png";
import "../css/gameOperator.css";

class GameOperator extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    getOperatorImage = () => {
        if (this.props.name === "Ash")
        {
                return AshImage;
        }
        else if (this.props.name === "Montagne")
        {
                return MontyImage;
        }
        else if (this.props.name === "Finka")
        {
                return FinkaImage;
        }
        else if (this.props.name === "Fuze")
        {
                return FuzeImage;
        }
        else if (this.props.name === "Frost")
        {
                return FrostImage;
        }
        else if (this.props.name === "Mute")
        {
                return MuteImage;
        }
        else if (this.props.name === "Ela")
        {
                return ElaImage;
        }
        else if (this.props.name === "Smoke")
        {
                return SmokeImage;
        }
    };

    componentDidMount() {
        this.props.setParentState(this.refs.image);
    };

    render()
    {
        return <img ref="image" src={this.getOperatorImage()} className="gameOperatorImage"/>
    }
}

export default GameOperator;