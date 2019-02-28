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
        this.attackerNameArray = ["Ash", "Montagne", "Finka", "Fuze"];
        this.defenderNameArray = ["Frost", "Mute", "Ela", "Smoke"];
        this.state =
            {
                attackerArray: [false, false, false, false],
                defenderArray: [false, false, false, false],
                selectedAttackerIndex: null,
                selectedDefenderIndex: null,
            };
    }

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    setStateAttArrayElement = (index) => {
        let newState = Object.assign({}, this.state);
        newState.attackerArray[index] = true;
        newState.attackerArray[this.state.selectedAttackerIndex] = false;
        newState.selectedAttackerIndex = index;
        this.setState(newState);
    };

    setStateDefArrayElement = (index) => {
        let newState = Object.assign({}, this.state);
        newState.defenderArray[index] = true;
        newState.defenderArray[this.state.selectedDefenderIndex] = false;
        newState.selectedDefenderIndex = index;
        this.setState(newState);
    };

    handleKeyPress = (event) => {
        event.preventDefault();
        if (event.key === "ArrowLeft")
        {
            if (this.state.selectedDefenderIndex === null)
            {
                this.setStateDefArrayElement(this.state.defenderArray.length - 1);
            }
            else
            {
                let index = null;
                if(this.state.selectedDefenderIndex === 0)
                    index = this.state.defenderArray.length - 1;
                else
                    index = this.state.selectedDefenderIndex - 1;
                this.setStateDefArrayElement(index);
            }
        }
        else if (event.key === "ArrowRight")
        {
            if (this.state.selectedDefenderIndex === null)
            {
                this.setStateDefArrayElement(0);
            }
            else
            {
                let index = null;
                if(this.state.selectedDefenderIndex === this.state.defenderArray.length - 1)
                    index = 0;
                else
                    index = this.state.selectedDefenderIndex + 1;
                this.setStateDefArrayElement(index);
            }
        }
        else if (event.key === "a")
        {
            if (this.state.selectedAttackerIndex === null)
            {
                this.setStateAttArrayElement(this.state.attackerArray.length - 1);
            }
            else
            {
                let index = null;
                if(this.state.selectedAttackerIndex === 0)
                    index = this.state.attackerArray.length - 1;
                else
                    index = this.state.selectedAttackerIndex - 1;
                this.setStateAttArrayElement(index);
            }
        }
        else if (event.key === "d")
        {
            if (this.state.selectedAttackerIndex === null)
            {
                this.setStateAttArrayElement(0);
            }
            else
            {
                let index = null;
                if(this.state.selectedAttackerIndex === this.state.attackerArray.length - 1)
                    index = 0;
                else
                    index = this.state.selectedAttackerIndex + 1;
                this.setStateAttArrayElement(index);
            }
        }
        else if (event.key === "Enter")
        {
            if(this.state.selectedAttackerIndex !== null &&
                this.state.selectedDefenderIndex !== null)
            {
                this.props.setParentState(this.attackerNameArray[this.state.selectedAttackerIndex],
                                          this.defenderNameArray[this.state.selectedDefenderIndex]);
                this.props.history.push('/mapPanel');
            }
        }
    };

    render()
    {
        return <div className="characterPanel">
            <BigLogo/>
            <h1>Choose your operator</h1>
            <div className="operators">
                <div className="operatorsText">
                    Attackers
                    <div className="operatorsName">
                        <Operator operatorName="Ash" isSelected={this.state.attackerArray[0]}/>
                        <Operator operatorName="Montagne" isSelected={this.state.attackerArray[1]}/>
                        <Operator operatorName="Finka" isSelected={this.state.attackerArray[2]}/>
                        <Operator operatorName="Fuze" isSelected={this.state.attackerArray[3]}/>
                    </div>

                </div>
                <div className="operatorsText">
                    Defenders
                    <div className="operatorsName">
                        <Operator operatorName="Frost" isSelected={this.state.defenderArray[0]}/>
                        <Operator operatorName="Mute" isSelected={this.state.defenderArray[1]}/>
                        <Operator operatorName="Ela" isSelected={this.state.defenderArray[2]}/>
                        <Operator operatorName="Smoke" isSelected={this.state.defenderArray[3]}/>
                    </div>
                </div>
            </div>
            <PlayButton linkUrl="/mapPanel" buttonText=">"/>
        </div>;
    }
}

export default CharacterPanel;