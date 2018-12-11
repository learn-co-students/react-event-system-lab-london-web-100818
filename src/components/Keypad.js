// Code Keypad Component Here
import React, { Component} from 'react'

class Keypad extends React.Component {

  handleForm = (event) => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <form>
          <input onKeyUp={this.handleForm} type='password'/>
        </form>
      </div>
    )
  }

}

export default Keypad