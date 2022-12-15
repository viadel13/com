import React, { Component } from 'react'
import Form from './Form'
import Menu from './Menu'

class Console extends Component {
  render() {
    return (
      <div>
        <Form />
        <Menu />
        <h1>Console</h1>
      </div>
    )
  }
}

export default Console