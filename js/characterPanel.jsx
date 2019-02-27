import React from "react";
import BigLogo from "./bigLogo.jsx";
import AshImage from "../images/Ash_Trans.png";
import FuzeImage from "../images/Fuze_trans.png";
import FinkaImage from "../images/Finka_trans.png";
import MontyImage from "../images/Monty_trans.png";
import FrostImage from "../images/Frost_Trans.png";
import MuteImage from "../images/Mute_trans.png";
import ElaImage from "../images/Ela_trans.png";
import SmokeImage from "../images/Smoke_trans.png";
import "../css/characterPanel.css";
import PlayButton from "./playButton.jsx";

class CharacterPanel extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="characterPanel">
            <BigLogo/>
            <h1>Choose your operator</h1>
            <div className="operators">
                <div className="operatorsText">
                    Attackers
                    <div className="operatorsName">
                        <div className="operator">
                            <img src={AshImage} className="fbi"></img>
                            <span>Ash</span>
                        </div>
                        <div className="operator">
                            <img src={MontyImage} className="gign"></img>
                            <span>Montagne</span>
                        </div>
                        <div className="operator">
                            <img src={FinkaImage} className="cbrn"></img>
                            <span>Finka</span>
                        </div>
                        <div className="operator">
                            <img src={FuzeImage} className="specnaz"></img>
                            <span>Thermite</span>
                        </div>
                    </div>

                </div>
                <div className="operatorsText">
                    Defenders
                    <div className="operatorsName">
                        <div className="operator">
                            <img src={FrostImage} className="jtf2"></img>
                            <span>Frost</span>
                        </div>
                        <div className="operator">
                            <img src={MuteImage} className="sas"></img>
                            <span>Mute</span>
                        </div>
                        <div className="operator">
                            <img src={ElaImage} className="grom"></img>
                            <span>Ela</span>
                        </div>
                        <div className="operator">
                            <img src={SmokeImage} className="sas"></img>
                            <span>Smoke</span>
                        </div>
                    </div>
                </div>
            </div>
            <PlayButton linkUrl="/mapPanel" buttonText=">"/>
        </div>;
    }
}

export default CharacterPanel;