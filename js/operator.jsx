import React from "react";
import AshImage from "../images/Ash_Trans.png";
import FuzeImage from "../images/Fuze_trans.png";
import FinkaImage from "../images/Finka_trans.png";
import MontyImage from "../images/Monty_trans.png";
import FrostImage from "../images/Frost_Trans.png";
import MuteImage from "../images/Mute_trans.png";
import ElaImage from "../images/Ela_trans.png";
import SmokeImage from "../images/Smoke_trans.png";
import "../css/operator.css";

class Operator extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    selectOperator = () =>{
        if (this.props.operatorName === "Ash")
        {
            this.operatorImage = <img src={AshImage} className="fbi"></img>;
        }
        else if (this.props.operatorName === "Montagne")
        {
            this.operatorImage = <img src={MontyImage} className="gign"></img>;
        }
        else if (this.props.operatorName === "Finka")
        {
            this.operatorImage = <img src={FinkaImage} className="cbrn"></img>;
        }
        else if (this.props.operatorName === "Fuze")
        {
            this.operatorImage = <img src={FuzeImage} className="specnaz"></img>;
        }
        else if (this.props.operatorName === "Frost")
        {
            this.operatorImage = <img src={FrostImage} className="jtf2"></img>;
        }
        else if (this.props.operatorName === "Mute")
        {
            this.operatorImage = <img src={MuteImage} className="sas"></img>;
        }
        else if (this.props.operatorName === "Ela")
        {
            this.operatorImage = <img src={ElaImage} className="grom"></img>;
        }
        else if (this.props.operatorName === "Smoke")
        {
            this.operatorImage = <img src={SmokeImage} className="sas"></img>;
        }
    };

    render()
    {
        this.selectOperator();
        return <div className="operator">
            {this.operatorImage}
            <span>{this.props.operatorName}</span>
        </div>
    }
}

export default Operator;