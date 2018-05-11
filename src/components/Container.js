import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Nav from './Nav';

export default class Container extends Component {
  constructor(){
    super();
    this.state={
      title: 'A veeeeeeeery long title.'
    }
  }

  changeTitle(phrase){
    this.setState({
      title: phrase
    })
  }

  render(){
    return(
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Header} />
          <Route path="/body_path" component={Body} />
          <Route path="/footer_path" component={Footer} />
        </div>  
      </Router>    
    )
  }
}