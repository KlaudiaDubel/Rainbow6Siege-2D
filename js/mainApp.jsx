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
import GamePanel from "./gamePanel.jsx";
import PageNotFound from "./pageNotFound.jsx";
import ThemeParkCanvas from "./themeParkCanvas.jsx";



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
                <Route path='/characterPanel' render={(props) => <CharacterPanel {...props} setParentState={this.setOperators} />}/>
                <Route path='/mapPanel' render={(props) => <MapPanel {...props} setParentState={this.setMap} />}/>
                <Route path='/test' render={(props) => <ThemeParkCanvas {...props} attacker="Ash" defender={"Ela"}
                                                                                   attackerX={10} attackerY={10}
                                                                                   defenderX={20} defenderY={60}/>}/>
                <Route path='/gamePanel' render={(props) =>
                    <GamePanel {...props}
                               selectedAttacker = {this.state.selectedAttacker}
                               selectedDefender = {this.state.selectedDefender}
                               selectedMap = {this.state.selectedMap}
                    />}/>
                <Route path='/testPanel' render={(props) =>
                    <GamePanel {...props}
                               selectedAttacker = {"Ash"}
                               selectedDefender = {"Frost"}
                               selectedMap = {"Theme Park"}
                    />}/>
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