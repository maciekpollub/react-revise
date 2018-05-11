import React, { Component } from 'react';

export default class Body extends Component{
  constructor(){
    super();
    this.state={
      innerText: 'This is introductory text.'
    }
  }

  render(){
    setTimeout(()=>{
      this.setState({
        innerText: 'This is the right text.'
      })
    }, 4000)
    return(
      <p>{this.state.innerText}</p>
    )
  }
}
