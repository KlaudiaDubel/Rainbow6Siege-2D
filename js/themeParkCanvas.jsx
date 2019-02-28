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
            }
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

    ctx = null;
    operatorWidth = 30;
    operatorHeight = 45;

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.ctx = ctx;

        ctx.strokeStyle = "#BADA55";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(206, 43);
        ctx.lineTo(206,348);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(155,350);
        ctx.lineTo(210,350);
        ctx.closePath();
        ctx.stroke();
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