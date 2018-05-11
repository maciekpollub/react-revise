import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
  render(){
    return(
      <ul>
        <li><Link to="/"><button class="btn btn-alarm">h e a d e r</button></Link></li>
        <li><Link to="/body_path"><button class="btn btn-primary">b o d y</button></Link></li>
        <li><Link to="/footer_path"><button class="btn btn-success">f o o t e r</button></Link></li>
      </ul>
    )
  }
}
