import React from 'react';
import ReactDOM from 'react-dom';


import CharacterPanel from './characterPanel.jsx';



class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <CharacterPanel/>
    }

}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});