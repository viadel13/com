import React, { Component } from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Console from './composants/Console';
import Accueil from './composants/Accueil';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Accueil}></Route>
        <Route path="/Console" component={Console}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
