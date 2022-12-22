import React, { Component } from 'react'

class Test extends Component {
    
  render() {
    console.log(this.props)
      
    // setTimeout(() => {
    //     this.props.history.push('/')
    //   }, 5000);

    return (
      <div>
        <h1>Page en maintenance revenez dans quelaues minutes</h1>
      </div>
    )
  }
}

export default  Test
