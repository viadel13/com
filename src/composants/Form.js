import React, { Component } from 'react'

class Form extends Component {
  render() {
    
    const{search} = this.props
    const{state} = this.props

    return (  
      <>
        <nav className="navbar navbar-expand-lg my-4 ">
            <div className="container">
              <form className="d-flex" role="search">
                  <input value={state} onChange={search} className="form-control form-sear me-2" type="search" placeholder="Rechercher un produit..." aria-label="Search" />
                  <button className="btn btn-primary search" >Search</button>
              </form>
            </div>
        </nav> 
        <hr />
      </>
    )
  }
}

export default Form;