import React, { Component } from 'react';
import Title from './Header/Title';

export default class Header extends Component {

handleChange(e){
  const title = e.target.value;
  this.props.changeTitle(title); 
}

  render() {
    return (
      <header>
        <p>
          Here the header starts...
        </p>
        <Title title={this.props.title}/>
        <input onChange={this.handleChange.bind(this)} />
        <p>
          ..and here the header ends.
        </p>
      </header>  
    );
  }
}
