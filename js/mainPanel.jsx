import React from 'react';
import BigLogo from './bigLogo.jsx';
import PlayButton from './playButton.jsx';
import '../css/mainPanel.css';



class MainPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount()
    {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount()
    {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        event.preventDefault();
        if (event.key === "Enter")
        {
            this.props.history.push('/characterPanel');
        }
    };

    render()
    {
        return <div className="mainPanel">
            <BigLogo />
            <PlayButton linkUrl="/characterPanel" buttonText=">"/>
        </div>;
    }

}

export default MainPanel;