import React from "react";
import "../css/themeParkCanvas.css";
import GameOperator from "./gameOperator.jsx";

class ThemeParkCanvas extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                attackerImage: null,
                defenderImage: null,
            };
        this.ctx = null;
        this.operatorWidth = 35;
        this.operatorHeight = 45;
        this.wallArray = [];
    }

    setAttackerState = (imageFromChild) => {
        this.setState({
            attackerImage: imageFromChild,
        });
    };

    setDefenderState = (imageFromChild) => {
        this.setState({
            defenderImage: imageFromChild,
        });
    };

    drawWalls = () => {
        this.ctx.strokeStyle = "grey";
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.moveTo(206, 43);
        this.ctx.lineTo(206,348);
        this.wallArray.push({x:206,y:43});
        this.wallArray.push({x:206,y:348});
        this.ctx.stroke();
        this.ctx.moveTo(155,350);
        this.ctx.lineTo(210,350);
        this.wallArray.push({x:210,y:350});
        this.wallArray.push({x:155,y:350});
        this.ctx.stroke();
        this.ctx.moveTo(151,345);
        this.ctx.lineTo(151, 442);
        this.wallArray.push({x:151,y:345});
        this.wallArray.push({x:151,y:442});
        this.ctx.stroke();
        this.ctx.moveTo(155,438);
        this.ctx.lineTo(212, 438);
        this.wallArray.push({x:155,y:438});
        this.wallArray.push({x:212,y:438});
        this.ctx.stroke();
        this.ctx.moveTo(208,438);
        this.ctx.lineTo(208, 590);
        this.wallArray.push({x:208,y:438});
        this.wallArray.push({x:208,y:590});
        this.ctx.stroke();
        /*this.ctx.moveTo(205,586);
        this.ctx.lineTo(290, 672);
        this.wallArray.push({x:205,y:586});
        this.wallArray.push({x:290,y:672});
        this.ctx.stroke();*/
        this.ctx.moveTo(288,670);
        this.ctx.lineTo(525, 670);
        this.wallArray.push({x:288,y:670});
        this.wallArray.push({x:525,y:670});
        this.ctx.stroke();
        this.ctx.moveTo(529,675);
        this.ctx.lineTo(529, 582);
        this.wallArray.push({x:529,y:675});
        this.wallArray.push({x:529,y:582});
        this.ctx.stroke();
        this.ctx.moveTo(529,588);
        this.ctx.lineTo(930, 588);
        this.wallArray.push({x:529,y:588});
        this.wallArray.push({x:930,y:588});
        this.ctx.stroke();
        this.ctx.moveTo(932,583);
        this.ctx.lineTo(932, 663);
        this.wallArray.push({x:932,y:583});
        this.wallArray.push({x:932,y:663});
        this.ctx.stroke();
        this.ctx.moveTo(927,666);
        this.ctx.lineTo(1175, 666);
        this.wallArray.push({x:927,y:666});
        this.wallArray.push({x:1175,y:666});
        this.ctx.stroke();
        this.ctx.moveTo(1168,666);
        this.ctx.lineTo(1168, 125);
        this.wallArray.push({x:1168,y:666});
        this.wallArray.push({x:1168,y:125});
        this.ctx.stroke();
        this.ctx.moveTo(1172,128);
        this.ctx.lineTo(740, 128);
        this.wallArray.push({x:1172,y:128});
        this.wallArray.push({x:740,y:128});
        this.ctx.stroke();
        this.ctx.moveTo(742,133);
        this.ctx.lineTo(742, 50);
        this.wallArray.push({x:742,y:133});
        this.wallArray.push({x:742,y:50});
        this.ctx.stroke();
        this.ctx.moveTo(747,48);
        this.ctx.lineTo(206, 48);
        this.wallArray.push({x:747,y:48});
        this.wallArray.push({x:206,y:48});
        this.ctx.stroke();
        this.ctx.moveTo(200,200);
        this.ctx.lineTo(390, 200);
        this.wallArray.push({x:200,y:200});
        this.wallArray.push({x:390,y:200});
        this.ctx.stroke();
        this.ctx.moveTo(390,206);
        this.ctx.lineTo(390, 150);
        this.wallArray.push({x:390,y:206});
        this.wallArray.push({x:390,y:150});
        this.ctx.stroke();
        this.ctx.moveTo(385,150);
        this.ctx.lineTo(405, 150);
        this.wallArray.push({x:385,y:150});
        this.wallArray.push({x:405,y:150});
        this.ctx.stroke();
        this.ctx.moveTo(455,150);
        this.ctx.lineTo(523, 150);
        this.wallArray.push({x:455,y:150});
        this.wallArray.push({x:523,y:150});
        this.ctx.stroke();
        this.ctx.moveTo(524,155);
        this.ctx.lineTo(524, 52);
        this.wallArray.push({x:524,y:155});
        this.wallArray.push({x:524,y:52});
        this.ctx.stroke();
        this.ctx.moveTo(471,155);
        this.ctx.lineTo(471, 366);
        this.wallArray.push({x:471,y:155});
        this.wallArray.push({x:471,y:366});
        this.ctx.stroke();
        this.ctx.moveTo(475,369);
        this.ctx.lineTo(370, 369);
        this.wallArray.push({x:475,y:369});
        this.wallArray.push({x:370,y:369});
        this.ctx.stroke();
        this.ctx.moveTo(329,369);
        this.ctx.lineTo(255, 369);
        this.wallArray.push({x:329,y:369});
        this.wallArray.push({x:255,y:369});
        this.ctx.stroke();
    };

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.ctx = ctx;

        this.props.setParentState(this.wallArray, 10);
        this.drawWalls();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if(this.ctx !== null)
        {
            if(this.props.attackerX !== prevProps.attackerX || this.props.attackerY !== prevProps.attackerY ||
                this.props.attackerOrientation !== prevProps.attackerOrientation ||
                this.props.attackerFire !== prevProps.attackerFire)
            {
                this.ctx.clearRect(prevProps.attackerX, prevProps.attackerY, this.operatorWidth, this.operatorHeight);
            }
            if(this.props.attackerOrientation === "left")
            {
                this.ctx.save();
                this.ctx.scale(-1, 1);
                this.ctx.drawImage(this.state.attackerImage, -(this.props.attackerX + this.operatorWidth),
                                    this.props.attackerY, this.operatorWidth, this.operatorHeight);
                this.ctx.restore();
            }
            else
            {
                this.ctx.drawImage(this.state.attackerImage, this.props.attackerX, this.props.attackerY, this.operatorWidth, this.operatorHeight);
            }
            if(this.props.defenderX !== prevProps.defenderX || this.props.defenderY !== prevProps.defenderY ||
                this.props.defenderOrientation !== prevProps.defenderOrientation ||
                this.props.defenderFire !== prevProps.defenderFire)
            {
                this.ctx.clearRect(prevProps.defenderX, prevProps.defenderY, this.operatorWidth, this.operatorHeight);
            }
            if(this.props.defenderOrientation === "left")
            {
                this.ctx.save();
                this.ctx.scale(-1, 1);
                this.ctx.drawImage(this.state.defenderImage, -(this.props.defenderX + this.operatorWidth),
                                    this.props.defenderY, this.operatorWidth, this.operatorHeight);
                this.ctx.restore();
            }
            else
            {
                this.ctx.drawImage(this.state.defenderImage, this.props.defenderX, this.props.defenderY, this.operatorWidth, this.operatorHeight);
            }
        }
    };

    render()
    {
        return <div className="canvasPanel">
            <canvas ref="canvas" width="1200px" height="700px"></canvas>
            <GameOperator setParentState={this.setAttackerState} name={this.props.attacker} weaponFire={this.props.attackerFire}/>
            <GameOperator setParentState={this.setDefenderState} name={this.props.defender} weaponFire={this.props.defenderFire}/>
        </div>
    }
}

export default ThemeParkCanvas;