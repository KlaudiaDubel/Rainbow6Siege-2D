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

        this.tolerance = { x: 20, y: 27.5 };
        this.operatorWidth = 30;
        this.operatorHeight = 45;

        this.state =
            {
                currentAttacker: this.props.selectedAttacker,
                currentDefender: this.props.selectedDefender,
                currentMap: this.props.selectedMap,

                attackerPositionX: 0,
                attackerPositionY: 10,

                defenderPositionX: 400,
                defenderPositionY: 310,

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

    avoidWallDown = (operatorCenter, wallBegin, wallEnd) => {
        if ((operatorCenter.y - wallBegin.y > -this.tolerance.y /2 &&
            operatorCenter.y - wallEnd.y < this.tolerance.y/2) &&
            (Math.abs(operatorCenter.x - wallBegin.x) < this.tolerance.x))
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    avoidWallLeft = (operatorCenter, wallBegin, wallEnd) => {
        if ((operatorCenter.x - wallEnd.x > -this.tolerance.x/2 &&
            operatorCenter.x - wallBegin.x < this.tolerance.x/2) &&
            (Math.abs(operatorCenter.y - wallBegin.y) < this.tolerance.y))
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    avoidWallRight = (operatorCenter, wallBegin, wallEnd) => {
        if ((operatorCenter.x - wallBegin.x > -this.tolerance.x/2 &&
            operatorCenter.x - wallEnd.x < this.tolerance.x/2) &&
            (Math.abs(operatorCenter.y - wallBegin.y) < this.tolerance.y))
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    avoidWallUp = (operatorCenter, wallBegin, wallEnd) => {
        if ((operatorCenter.y - wallEnd.y > -this.tolerance.y/2 &&
            operatorCenter.y - wallBegin.y < this.tolerance.y/2) &&
            (Math.abs(operatorCenter.x - wallBegin.x) < this.tolerance.x))
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    wallDirection = (wallBegin, wallEnd) => {
        if(Math.abs(wallBegin.x - wallEnd.x) < this.state.wallWidth)
        {
            //pionowa
            if(wallBegin.y < wallEnd.y)
                return "Down";
            else
                return "Up"
        }
        else if (Math.abs(wallBegin.y - wallEnd.y) < this.state.wallWidth)
        {
            //pozioma
            if(wallBegin.x < wallEnd.x)
                return "Right";
            else
                return "Left"
        }
        else
            return "Skew";
    };

    attackerShallNotPass = (newPosition) => {
        for(let i = 0; i < this.state.wallArray.length-1; i+=2)
        {
            const attackerCenter = {x:newPosition.x+this.operatorWidth/2,
                                    y:newPosition.y+this.operatorHeight/2};
            const wallBegin = {x:this.state.wallArray[i].x,
                               y:this.state.wallArray[i].y};
            const wallEnd = {x:this.state.wallArray[i+1].x,
                             y:this.state.wallArray[i+1].y};

            if(this.wallDirection(wallBegin,wallEnd) === "Down")
            {
                if(this.avoidWallDown(attackerCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Up")
            {
                if(this.avoidWallUp(attackerCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Left")
            {
                if(this.avoidWallLeft(attackerCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Right")
            {
                if(this.avoidWallRight(attackerCenter, wallBegin, wallEnd))
                    return true;
            }

        }
        return false;
    };

    defenderShallNotPass = (newPosition) => {
        for(let i = 0; i < this.state.wallArray.length-1; i+=2)
        {
            const defenderCenter = {x:newPosition.x+this.operatorWidth/2,
                y:newPosition.y+this.operatorHeight/2};
            const wallBegin = {x:this.state.wallArray[i].x,
                y:this.state.wallArray[i].y};
            const wallEnd = {x:this.state.wallArray[i+1].x,
                y:this.state.wallArray[i+1].y};

            if(this.wallDirection(wallBegin,wallEnd) === "Down")
            {
                if(this.avoidWallDown(defenderCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Up")
            {
                if(this.avoidWallUp(defenderCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Left")
            {
                if(this.avoidWallLeft(defenderCenter, wallBegin, wallEnd))
                    return true;
            }
            else if(this.wallDirection(wallBegin,wallEnd) === "Right")
            {
                if(this.avoidWallRight(defenderCenter, wallBegin, wallEnd))
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
        let newPosition = {x:this.state.defenderPositionX, y:this.state.defenderPositionY};
        if (event.key === "ArrowLeft")
        {
            newPosition.x = this.state.defenderPositionX - this.operatorWidth / 3
        }
        else if (event.key === "ArrowRight")
        {
            newPosition.x = this.state.defenderPositionX + this.operatorWidth / 3
        }
        else if (event.key === "ArrowUp")
        {
            newPosition.y = this.state.defenderPositionY - this.operatorHeight / 3
        }
        else if (event.key === "ArrowDown")
        {
            newPosition.y = this.state.defenderPositionY + this.operatorHeight / 3
        }
        if(!this.defenderShallNotPass(newPosition))
        {
            this.setState({
                defenderPositionX: newPosition.x,
                defenderPositionY: newPosition.y,
            });
        }
    };

    handleWSADKeys = (event) =>
    {
        let newPosition = {x:this.state.attackerPositionX, y:this.state.attackerPositionY};
        if (event.key === "a")
        {
            newPosition.x = this.state.attackerPositionX - this.operatorWidth / 3
        }
        else if (event.key === "d")
        {
            newPosition.x = this.state.attackerPositionX + this.operatorWidth / 3
        }
        else if (event.key === "w")
        {
            newPosition.y = this.state.attackerPositionY - this.operatorHeight / 3
        }
        else if (event.key === "s")
        {
            newPosition.y = this.state.attackerPositionY + this.operatorHeight / 3
        }
        if(!this.attackerShallNotPass(newPosition))
        {
            this.setState({
                attackerPositionX: newPosition.x,
                attackerPositionY: newPosition.y,
            });
        }
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