import React, { Component } from 'react'
import sear from '../images/search.svg'

class Form extends Component {
  render() {
    
    const{search} = this.props
    const{state} = this.props

    return (  
      <>
        <nav className="navbar navbar-expand-lg my-4 ">
            <div className="container">
              <form className="d-flex formSea" role="search">
                
                <input value={state} onChange={search} className="form-control form-sear me-2" type="search" placeholder="Rechercher un produit..." aria-label="Search" />
                <span className='imgSear'><img src={sear} alt='sear' width={40} height={25}></img></span>
                
              </form>
            </div>
        </nav> 
        <hr />
      </>
    )
  }
}

export default Form;