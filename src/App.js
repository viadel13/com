import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Console from './composants/Console';
import Accueil from './composants/Accueil';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Accueil />
        </Route>
        <Route path="/Console">
          <Console />
        </Route>
      </Switch>
    )
  }
}

export default App;
