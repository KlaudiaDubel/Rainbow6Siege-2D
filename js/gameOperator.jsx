import React from "react";
import AshImage from "../images/Ash_trans_weapon.png";
import FuzeImage from "../images/Fuze_trans_weapon.png";
import FinkaImage from "../images/Finka_trans_weapon.png";
import MontyImage from "../images/Monty_trans_shield.png";
import FrostImage from "../images/Frost_trans_weapon.png";
import MuteImage from "../images/Mute_trans_weapon.png";
import ElaImage from "../images/Ela_trans_weapon.png";
import SmokeImage from "../images/Smoke_trans_weapon.png";
import AshImageFire from "../images/Ash_trans_weapon_fire.png";
import FuzeImageFire from "../images/Fuze_trans_weapon_fire.png";
import FinkaImageFire from "../images/Finka_trans_weapon_fire.png";
import FrostImageFire from "../images/Frost_trans_weapon_fire.png";
import MuteImageFire from "../images/Mute_trans_weapon_fire.png";
import ElaImageFire from "../images/Ela_trans_weapon_fire.png";
import SmokeImageFire from "../images/Smoke_trans_weapon_fire.png";
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
            if (this.props.weaponFire)
                return AshImageFire;
            else
                return AshImage;
        }
        else if (this.props.name === "Montagne")
        {
                return MontyImage;
        }
        else if (this.props.name === "Finka")
        {
            if (this.props.weaponFire)
                return FinkaImageFire;
            else
                return FinkaImage;
        }
        else if (this.props.name === "Fuze")
        {
            if (this.props.weaponFire)
                return FuzeImageFire;
            else
                return FuzeImage;
        }
        else if (this.props.name === "Frost")
        {
            if (this.props.weaponFire)
                return FrostImageFire;
            else
                return FrostImage;
        }
        else if (this.props.name === "Mute")
        {
            if (this.props.weaponFire)
                return MuteImageFire;
            else
                return MuteImage;
        }
        else if (this.props.name === "Ela")
        {
            if (this.props.weaponFire)
                return ElaImageFire;
            else
                return ElaImage;
        }
        else if (this.props.name === "Smoke")
        {
            if (this.props.weaponFire)
                return SmokeImageFire;
            else
                return SmokeImage;
        }
    };

    componentDidMount()
    {
        this.props.setParentState(this.refs.image);
    };

    render()
    {
        return <img ref="image" src={this.getOperatorImage()} className="gameOperatorImage"/>
    }
}

export default GameOperator;