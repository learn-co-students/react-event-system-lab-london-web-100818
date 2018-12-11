// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends React.Component {


handleButtonFocus = () => {
  console.log('Good!')
}

handleButtonBlur = () => {
  console.log('Hey! Eyes on me!')
}

  render() {
    return(
      <div>
        <button onFocus={this.handleButtonFocus} onBlur={this.handleButtonBlur} >Button</button>
      </div>
    )
  }
}

export default EyesOnMe
