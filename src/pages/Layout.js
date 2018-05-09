import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact'


export default class Layout extends Component {
  render(){
    return(
      <Router>
        <div className="container">
          <h1>The name of the page</h1>
          <ul>
            <li><Link class="btn btn-success" to="/"><button>h o m e</button></Link></li>
            <li><Link class="btn btn-danger" to="/about_path"><button>a b o u t</button></Link></li>
            <li><Link class="btn btn-primary" to="/contact_path"><button>c o n t a c t</button></Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about_path" component={About} />
          <Route path="/contact_path" component={Contact} />
        </div> 
      </Router>
    );
  }
}
