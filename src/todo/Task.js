import React, { Component } from 'react';

export default class Task extends Component{
  render(){
    return(
      <div>
        <p>{this.props.name}<button onClick={() => this.props.handleDeletion(this.props.name)}>Delete</button></p>
      </div>
    );
  }
}