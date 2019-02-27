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
        this.state = {
            selectedAttacker: null,
            selectedDefender: null,
            selectedMap: null,
        }
    }

    setOperators = (attackerFromChild, defenderFromChild) =>
    {
        this.setState({
           selectedAttacker: attackerFromChild,
           selectedDefender: defenderFromChild,
        });
    };

    setMap = (mapFromChild) =>
    {
        this.setState({
            selectedMap: mapFromChild,
        });
    };

    render()
    {
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={MainPanel}/>
                <Route path='/characterPanel' setParentState={this.setOperators} component={CharacterPanel}/>
                <Route path='/mapPanel' setParentState={this.setMap} component={MapPanel}/>
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