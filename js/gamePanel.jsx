import React from "react";
import "../css/gamePanel.css";
import{
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";
//import BorderCanvas from "./borderCanvas.jsx";
import ThemeParkCanvas from "./themeParkCanvas.jsx";
//import HerefordCanvas from "./herefordCanvas.jsx";

class GamePanel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.tolerance = 1;
        this.operatorWidth = 30;
        this.operatorHeight = 45;

        this.state =
            {
                currentAttacker: this.props.selectedAttacker,
                currentDefender: this.props.selectedDefender,
                currentMap: this.props.selectedMap,

                attackerPositionX: 0,
                attackerPositionY: 10,

                defenderPositionX: 40,
                defenderPositionY: 10,

                gameEnded: null,
                wallArray: [],
                wallWidth: 0,
            }
    }

    setWalls = (wallsFromChild, wallWidthFromChild) => {
        this.setState({
            wallArray: wallsFromChild,
            wallWidth: wallWidthFromChild,
        })
    };

    getMapCanvas = () => {
      if (this.state.currentMap === "Theme Park")
      {
          return <ThemeParkCanvas attacker={this.state.currentAttacker} defender={this.state.currentDefender}
                                  attackerX={this.state.attackerPositionX} attackerY={this.state.attackerPositionY}
                                  defenderX={this.state.defenderPositionX} defenderY={this.state.defenderPositionY}
                                  setParentState={this.setWalls}/>
      }
      else if (this.state.currentMap === "Border")
      {
          this.props.history.push('/pageNotFound');
          return null;
      }
      else if (this.state.currentMap === "Hereford Base")
      {
          this.props.history.push('/pageNotFound');
          return null;
      }

    };

    attackerShallNotPass = () => {
        for(let i = 0; i < this.state.wallArray.length; i++)
        {
            console.log(Math.abs(this.state.wallArray[i].x - this.state.wallWidth - this.state.attackerPositionX));
            if (Math.abs(this.state.wallArray[i].x - this.state.wallWidth - this.state.attackerPositionX) < this.tolerance ||
                Math.abs(this.state.wallArray[i].x + this.state.wallWidth - this.state.attackerPositionX) < this.tolerance ||
                Math.abs(this.state.wallArray[i].x - this.state.wallWidth - this.state.attackerPositionX + this.operatorWidth) < this.tolerance ||
                Math.abs(this.state.wallArray[i].x + this.state.wallWidth - this.state.attackerPositionX + this.operatorWidth) < this.tolerance ||

                Math.abs(this.state.wallArray[i].y - this.state.wallWidth - this.state.attackerPositionY) < this.tolerance ||
                Math.abs(this.state.wallArray[i].y + this.state.wallWidth - this.state.attackerPositionY) < this.tolerance ||
                Math.abs(this.state.wallArray[i].y - this.state.wallWidth - this.state.attackerPositionY + this.operatorHeight) < this.tolerance ||
                Math.abs(this.state.wallArray[i].y + this.state.wallWidth - this.state.attackerPositionY + this.operatorHeight) < this.tolerance)
            {
                return true;
            }
        }
        return false;
    };

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleArrowKeys = (event) =>
    {
        if (event.key === "ArrowLeft")
        {
            this.setState({
                defenderPositionX: this.state.defenderPositionX - this.operatorWidth
            });
        }
        else if (event.key === "ArrowRight")
        {
            this.setState({
                defenderPositionX: this.state.defenderPositionX + this.operatorWidth
            });
        }
        else if (event.key === "ArrowUp")
        {
            this.setState({
                defenderPositionY: this.state.defenderPositionY - this.operatorHeight
            });
        }
        else if (event.key === "ArrowDown")
        {
            this.setState({
                defenderPositionY: this.state.defenderPositionY + this.operatorHeight
            });
        }
    };

    handleWSADKeys = (event) =>
    {
        const previousPosition = {x:this.state.attackerPositionX, y:this.state.attackerPositionY};
        if (event.key === "a")
        {
            this.setState({
                attackerPositionX: this.state.attackerPositionX - this.operatorWidth
            });
        }
        else if (event.key === "d")
        {
            this.setState({
                attackerPositionX: this.state.attackerPositionX + this.operatorWidth
            });
        }
        else if (event.key === "w")
        {
            this.setState({
                attackerPositionY: this.state.attackerPositionY - this.operatorHeight
            });
        }
        else if (event.key === "s")
        {
            this.setState({
                attackerPositionY: this.state.attackerPositionY + this.operatorHeight
            });
        }
        console.log(this.attackerShallNotPass());
        if(this.attackerShallNotPass())
            this.setState({
                attackerPositionX: previousPosition.x,
                attackerPositionY: previousPosition.y,
            })
    };

    handleOtherKeys = (event) =>
    {
        if (event.key === "Enter")
        {
            this.setState({gameEnded: "AttackersWon"});
            if(this.state.gameEnded === null)
            {
                this.props.history.push('/');
            }
        }
    };

    handleKeyDown = (event) =>
    {
        event.preventDefault();
        this.handleArrowKeys(event);
        this.handleWSADKeys(event);
        this.handleOtherKeys(event);
    };

    render() {
        return (
            <div className="gamePanel">
                {this.getMapCanvas()}
            </div>
        );
    }
}

export default GamePanel;