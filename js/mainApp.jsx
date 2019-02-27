import React from 'react';
import ReactDOM from 'react-dom';
import{
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";
import MainPanel from './mainPanel.jsx';
import CharacterPanel from "./characterPanel.jsx";
import MapPanel from "./mapPanel.jsx";
import PageNotFound from "./pageNotFound.jsx";



class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={MainPanel}/>
                <Route path='/characterPanel' component={CharacterPanel}/>
                <Route path='/mapPanel' component={MapPanel}/>
                <Route component={PageNotFound}/>
            </Switch>
        </HashRouter>
    }

}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});