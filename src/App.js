import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Accueil from './composants/Accueil'
import Ordinateur from './composants/Ordinateur'
import Android from './composants/Android'
import Console from './composants/Console'


class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route path="/Ordinateur" >
              <Ordinateur />
            </Route>
            <Route path="/Android" >
              <Android />
            </Route>
            <Route path="/Console" >
              <Console />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
