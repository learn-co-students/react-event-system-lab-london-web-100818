import React, {Component} from 'react';

class EyesOnMe extends Component{

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handleOnFocus = () => {
        console.log('Good!')
    }
    render(){
        return(<button
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        ></button>)
    }
}

export default EyesOnMe
