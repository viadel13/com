import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import Accueil from './composants/Accueil'
import Ordinateur from './composants/Ordinateur'
import Android from './composants/Android'
import Console from './composants/Console'
import Test from './composants/Test'
import Error from './composants/Error'
import Loader from './composants/Loader';


class App extends Component {
  state = {
    // construction : {
    //   Accueil : false,
    //   Android : false,
    //   Ordinateur : false,
    //   Console : true
    // }
    loader : true
  }

  render() {
    
      setTimeout(() => {
        this.setState({
            loader : false
        })
    }, 2000)

    return (
      <div className='container-fluid app'>
        {
          this.state.loader ? 
          
          <div className='row loa'>
            <div className='col-12 col-md-12'>
              <Loader />
            </div>
          </div>
          
       

          : 
          (
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

              <Route path="/Console" component={Console} />
              
              <Route path="/Test" component={Test} />

              <Route>
                <Error />
              </Route>
        
            </Switch>
            
            </div>
          )  
        }  
      </div>
    )
  }
}

export default App
