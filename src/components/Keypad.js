import React from 'react'

class Keypad extends React.Component {
  handleEvent = () => {
    console.log('Entering password...')
  }
  
  render() {
    return (
      <input
        type='password'
        onKeyUp={this.handleEvent}
      />
    )
  }
}

export default Keypad