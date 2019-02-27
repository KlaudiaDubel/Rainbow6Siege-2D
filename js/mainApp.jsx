import React from 'react';
import ReactDOM from 'react-dom';


import PageNotFound from './pageNotFound.jsx';



class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <PageNotFound/>
    }

}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});