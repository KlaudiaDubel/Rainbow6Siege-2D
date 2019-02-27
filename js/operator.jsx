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
import Border from "../images/Border.png";

class Operator extends React.Component
{
    constructor(props)
    {
        super(props);

    }

    selectOperator = () =>{
        if (this.props.operatorName === "Ash")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={AshImage} className="fbi"></img>;
            else
                this.operatorImage = <img src={AshImage}></img>;

        }
        else if (this.props.operatorName === "Montagne")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={MontyImage} className="gign"></img>;
            else
                this.operatorImage = <img src={MontyImage}></img>;
        }
        else if (this.props.operatorName === "Finka")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={FinkaImage} className="cbrn"></img>;
            else
                this.operatorImage = <img src={FinkaImage}></img>;
        }
        else if (this.props.operatorName === "Fuze")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={FuzeImage} className="specnaz"></img>;
            else
                this.operatorImage = <img src={FuzeImage}></img>;
        }
        else if (this.props.operatorName === "Frost")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={FrostImage} className="jtf2"></img>;
            else
                this.operatorImage = <img src={FrostImage}></img>;
        }
        else if (this.props.operatorName === "Mute")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={MuteImage} className="sas"></img>;
            else
                this.operatorImage = <img src={MuteImage}></img>;
        }
        else if (this.props.operatorName === "Ela")
        {
            if(this.props.isSelected === true)
               this.operatorImage = <img src={ElaImage} className="grom"></img>;
            else
                this.operatorImage = <img src={ElaImage}></img>;
        }
        else if (this.props.operatorName === "Smoke")
        {
            if(this.props.isSelected === true)
                this.operatorImage = <img src={SmokeImage} className="sas"></img>;
            else
                this.operatorImage = <img src={SmokeImage}></img>;
        }
        if(this.props.isSelected === true)
            this.operatorSpan = <span className="selectedOperatorSpan">{this.props.operatorName}</span>;
        else
            this.operatorSpan = <span className="notSelectedOperatorSpan">{this.props.operatorName}</span>;

    };

    render()
    {
        this.selectOperator();
        return <div className="operator">
            {this.operatorImage}
            {this.operatorSpan}
        </div>
    }
}

export default Operator;