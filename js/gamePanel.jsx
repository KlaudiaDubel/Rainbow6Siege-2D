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
        this.operatorWidth = 35;
        this.operatorHeight = 45;

        this.roundsPerMinute = 700;

        this.state =
            {
                currentAttacker: this.props.selectedAttacker,
                currentDefender: this.props.selectedDefender,
                currentMap: this.props.selectedMap,

                attackerPositionX: 0,
                attackerPositionY: 10,
                attackerOrientation: "right",
                attackerFire: false,

                defenderPositionX: 400,
                defenderPositionY: 310,
                defenderOrientation: "right",
                defenderFire: false,

                operatorStepScale: 1/3,

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
                                  attackerOrientation={this.state.attackerOrientation} attackerFire={this.state.attackerFire}
                                  defenderX={this.state.defenderPositionX} defenderY={this.state.defenderPositionY}
                                  defenderOrientation={this.state.defenderOrientation} defenderFire={this.state.defenderFire}
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
        return (operatorCenter.y - wallBegin.y > -this.tolerance.y / 2 &&
            operatorCenter.y - wallEnd.y < this.tolerance.y / 2) &&
            (Math.abs(operatorCenter.x - wallBegin.x) < this.tolerance.x);
    };

    avoidWallLeft = (operatorCenter, wallBegin, wallEnd) => {
        return (operatorCenter.x - wallEnd.x > -this.tolerance.x / 2 &&
            operatorCenter.x - wallBegin.x < this.tolerance.x / 2) &&
            (Math.abs(operatorCenter.y - wallBegin.y) < this.tolerance.y);
    };

    avoidWallRight = (operatorCenter, wallBegin, wallEnd) => {
        return (operatorCenter.x - wallBegin.x > -this.tolerance.x / 2 &&
            operatorCenter.x - wallEnd.x < this.tolerance.x / 2) &&
            (Math.abs(operatorCenter.y - wallBegin.y) < this.tolerance.y);
    };

    avoidWallUp = (operatorCenter, wallBegin, wallEnd) => {
        return (operatorCenter.y - wallEnd.y > -this.tolerance.y / 2 &&
            operatorCenter.y - wallBegin.y < this.tolerance.y / 2) &&
            (Math.abs(operatorCenter.x - wallBegin.x) < this.tolerance.x);
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
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount()
    {
        window.removeEventListener('keydown', this.handleKeyDown);
        clearInterval(this.attackerShootingInterval);
        clearInterval(this.defenderShootingInterval);
        clearTimeout(this.attackerShootingTimeout);
        clearTimeout(this.defenderShootingTimeout);
    }

    handleArrowKeys = (event) =>
    {
        let newPosition = {x:this.state.defenderPositionX, y:this.state.defenderPositionY};
        if (event.key === "ArrowLeft") {
            if (this.state.defenderOrientation === "right")
                this.setState({defenderOrientation: "left"});
            else
                newPosition.x = this.state.defenderPositionX - this.operatorWidth * this.state.operatorStepScale
        }
        else if (event.key === "ArrowRight")
        {
            if (this.state.defenderOrientation === "left")
                this.setState({defenderOrientation: "right"});
            else
                newPosition.x = this.state.defenderPositionX + this.operatorWidth * this.state.operatorStepScale
        }
        else if (event.key === "ArrowUp")
        {
            newPosition.y = this.state.defenderPositionY - this.operatorHeight * this.state.operatorStepScale
        }
        else if (event.key === "ArrowDown")
        {
            newPosition.y = this.state.defenderPositionY + this.operatorHeight * this.state.operatorStepScale
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
            if (this.state.attackerOrientation === "right")
                this.setState({attackerOrientation: "left"});
            else
                newPosition.x = this.state.attackerPositionX - this.operatorWidth * this.state.operatorStepScale
        }
        else if (event.key === "d")
        {
            if (this.state.attackerOrientation === "left")
                this.setState({attackerOrientation: "right"});
            else
                newPosition.x = this.state.attackerPositionX + this.operatorWidth * this.state.operatorStepScale
        }
        else if (event.key === "w")
        {
            newPosition.y = this.state.attackerPositionY - this.operatorHeight * this.state.operatorStepScale
        }
        else if (event.key === "s")
        {
            newPosition.y = this.state.attackerPositionY + this.operatorHeight * this.state.operatorStepScale
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
        else if (event.key === "f")
        {
            clearInterval(this.attackerShootingInterval);
            clearTimeout(this.attackerShootingTimeout);
            this.setState({attackerFire:true});
            this.attackerShootingInterval = setInterval(() =>
            {
                if(this.state.attackerFire)
                    this.setState({attackerFire: false});
                else
                    this.setState({attackerFire: true});
            },100);
            this.attackerShootingTimeout = setTimeout( () =>
            {
                clearInterval(this.attackerShootingInterval);
            },500);
        }
        else if (event.which === 220)
        {
            clearInterval(this.defenderShootingInterval);
            clearTimeout(this.defenderShootingTimeout);
            this.setState({defenderFire:true});
            this.defenderShootingInterval = setInterval(() =>
            {
                if(this.state.defenderFire)
                    this.setState({defenderFire: false});
                else
                    this.setState({defenderFire: true});
            },100);
            this.defenderShootingTimeout = setTimeout( () =>
            {
                clearInterval(this.defenderShootingInterval);
            },500);
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