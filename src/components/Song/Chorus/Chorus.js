import React, {Component} from 'react';

export default class Chorus extends Component {
  
  handleChange(e){
    const author = e.target.value;
    this.props.changeAuthor(author);
  }
  
  render(){
    return(
      <div>
        <h2>{this.props.author}</h2>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}