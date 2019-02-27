import React from "react";
import BigLogo from "./bigLogo.jsx";
import "../css/characterPanel.css";
import PlayButton from "./playButton.jsx";
import Operator from "./operator.jsx";

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
                        <Operator operatorName="Ash"/>
                        <Operator operatorName="Montagne"/>
                        <Operator operatorName="Finka"/>
                        <Operator operatorName="Fuze"/>
                    </div>

                </div>
                <div className="operatorsText">
                    Defenders
                    <div className="operatorsName">
                        <Operator operatorName="Frost"/>
                        <Operator operatorName="Mute"/>
                        <Operator operatorName="Ela"/>
                        <Operator operatorName="Smoke"/>
                    </div>
                </div>
            </div>
            <PlayButton linkUrl="/mapPanel" buttonText=">"/>
        </div>;
    }
}

export default CharacterPanel;