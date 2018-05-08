import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
export default class Layout extends Component {

  constructor(){
    super();
    this.state = {
      title: `Strange title!`
    };
  }

  changeTitle(phrase){
    this.setState({
      title: phrase
    })
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer/>
      </div>  
    );
  }
}
