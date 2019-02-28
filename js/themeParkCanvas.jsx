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
        this.operatorWidth = 30;
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

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.ctx = ctx;

        ctx.strokeStyle = "#B000B5";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(206, 43);
        ctx.lineTo(206,348);
        this.wallArray.push({x:206,y:43});
        this.wallArray.push({x:206,y:348});
        ctx.stroke();
        ctx.moveTo(155,350);
        ctx.lineTo(210,350);
        this.wallArray.push({x:155,y:350});
        this.wallArray.push({x:210,y:350});
        ctx.stroke();
        ctx.moveTo(151,345);
        ctx.lineTo(151, 365);
        this.wallArray.push({x:151,y:345});
        this.wallArray.push({x:151,y:365});
        ctx.stroke();
        ctx.moveTo(151,422);
        ctx.lineTo(151, 442);
        this.wallArray.push({x:151,y:422});
        this.wallArray.push({x:151,y:442});
        ctx.stroke();
        ctx.moveTo(155,438);
        ctx.lineTo(212, 438);
        this.wallArray.push({x:155,y:438});
        this.wallArray.push({x:212,y:438});
        ctx.stroke();
        ctx.moveTo(208,438);
        ctx.lineTo(208, 590);
        this.wallArray.push({x:208,y:438});
        this.wallArray.push({x:208,y:590});
        ctx.stroke();
        ctx.moveTo(205,586);
        ctx.lineTo(290, 672);
        this.wallArray.push({x:205,y:586});
        this.wallArray.push({x:290,y:672});
        ctx.stroke();
        ctx.moveTo(288,670);
        ctx.lineTo(525, 670);
        this.wallArray.push({x:288,y:670});
        this.wallArray.push({x:525,y:670});
        ctx.stroke();
        ctx.moveTo(529,675);
        ctx.lineTo(529, 582);
        this.wallArray.push({x:529,y:675});
        this.wallArray.push({x:529,y:582});
        ctx.stroke();
        ctx.moveTo(529,588);
        ctx.lineTo(930, 588);
        this.wallArray.push({x:529,y:588});
        this.wallArray.push({x:930,y:588});
        ctx.stroke();
        ctx.moveTo(932,583);
        ctx.lineTo(932, 663);
        this.wallArray.push({x:932,y:583});
        this.wallArray.push({x:932,y:663});
        ctx.stroke();
        ctx.moveTo(927,666);
        ctx.lineTo(1175, 666);
        this.wallArray.push({x:927,y:666});
        this.wallArray.push({x:1175,y:666});
        ctx.stroke();
        ctx.moveTo(1168,666);
        ctx.lineTo(1168, 125);
        this.wallArray.push({x:1168,y:666});
        this.wallArray.push({x:1168,y:125});
        ctx.stroke();
        ctx.moveTo(1172,128);
        ctx.lineTo(740, 128);
        this.wallArray.push({x:1172,y:128});
        this.wallArray.push({x:740,y:128});
        ctx.stroke();
        ctx.moveTo(742,133);
        ctx.lineTo(742, 50);
        this.wallArray.push({x:742,y:133});
        this.wallArray.push({x:742,y:50});
        ctx.stroke();
        ctx.moveTo(747,48);
        ctx.lineTo(206, 48);
        this.wallArray.push({x:747,y:48});
        this.wallArray.push({x:206,y:48});
        ctx.stroke();

        this.props.setParentState(this.wallArray, 10);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.attackerX !== prevProps.attackerX || this.props.attackerY !== prevProps.attackerY)
            this.ctx.clearRect(prevProps.attackerX, prevProps.attackerY, this.operatorWidth, this.operatorHeight);
        if(this.props.defenderX !== prevProps.defenderX || this.props.defenderY !== prevProps.defenderY)
            this.ctx.clearRect(prevProps.defenderX, prevProps.defenderY, this.operatorWidth, this.operatorHeight);
    };

    render()
    {
        if(this.ctx !== null) {
            this.ctx.drawImage(this.state.attackerImage, this.props.attackerX, this.props.attackerY, this.operatorWidth, this.operatorHeight);
            this.ctx.drawImage(this.state.defenderImage, this.props.defenderX, this.props.defenderY, this.operatorWidth, this.operatorHeight);
        }
        return <div className="canvasPanel">
            <canvas ref="canvas" width="1200px" height="700px"></canvas>
            <GameOperator setParentState={this.setAttackerState} name={this.props.attacker}/>
            <GameOperator setParentState={this.setDefenderState} name={this.props.defender}/>
        </div>
    }
}

export default ThemeParkCanvas;