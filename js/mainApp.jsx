import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './mainPanel.jsx';



class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <MainPanel/>
    }

}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});