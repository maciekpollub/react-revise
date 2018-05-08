import React, {Component} from 'react';
import Chorus from './Chorus/Chorus';

export default class Song extends Component{
  constructor(){
    super();
    this.state={
      author: 'POD'
    };
  }

  changeAuthor(phrase){
    this.setState({
      author: phrase
    })
  }

  render() {
    return(
      <div>
        <Chorus author={this.state.author}
                changeAuthor={this.changeAuthor.bind(this)}/>

      </div>
    )
  }
}