import React, { Component } from 'react';

export default class Home extends Component{
  render(){
    return(
      <div>
        console.log(this.props)
        <h1>Home</h1>
      </div>
    );
  }
}