import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg header">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menuMobile" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link menuChildren acceuil active" aria-current="page" to="/">Accueil</Link>
                            <Link className="nav-link menuChildren android" to="/Android">Android</Link>
                            <Link className="nav-link menuChildren ordinateur" to="/Ordinateur">Ordinateur</Link>
                            <Link className="nav-link menuChildren console" to="/Console">Console</Link> 
                      
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu