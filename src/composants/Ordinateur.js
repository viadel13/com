import React, { Component } from 'react'
import Form from './Form'
import Menu from './Menu'
import laptop from '../images/laptop.png'

class Ordinateur extends Component {
  render() {
    return (
      <div>
         <Form />
         <Menu />
         <h1>Ordinateur</h1>
         <img src={laptop} alt='laptop' width={120} />
      </div>
    )
  }
}

export default Ordinateur