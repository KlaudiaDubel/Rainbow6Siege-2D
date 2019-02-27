import React from 'react';
import ReactDOM from 'react-dom';
import MapPanel from './mapPanel.jsx';



class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <MapPanel/>
    }

}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});