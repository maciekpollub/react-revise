import React, { Component } from 'react';
import TasksList from './TasksList';

export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      newTaskPhrase: '',
      query: '',
      currentTasks: []
    }
    this.handleNewTaskPhrase=this.handleNewTaskPhrase.bind(this);
    this.handleQuery=this.handleQuery.bind(this);
    this.handleDeletion=this.handleDeletion.bind(this);
    this.handleSubmition=this.handleSubmition.bind(this);
  }
  
  handleNewTaskPhrase(e){
    this.setState({
      newTaskPhrase:e.target.value
    })
  }

  handleSubmition(e){
    e.preventDefault();
    if (!this.state.newTaskPhrase.length){
      return;
    }
    this.setState({
      currentTasks: this.state.currentTasks.concat(this.state.newTaskPhrase),
      newTaskPhrase: ''
    })

  }


  handleQuery(e){
    this.setState({
      query: e.target.value
    })
  }

  handleDeletion(taskToDelete){
    this.setState({
      currentTasks: this.state.currentTasks.filter(t => taskToDelete !== t) 
    })
  }



  render(){
    return(
      <div>
        <h1>A new TODO application</h1>
        <h3>My tasks:</h3>
        <TasksList currentTasks={this.state.currentTasks}
                   query={this.state.query}
                   handleDeletion={this.handleDeletion}
                   />
        <div className="adding">
          <input onChange={this.handleNewTaskPhrase}
               value={this.state.newTaskPhrase} />
          <button onClick={this.handleSubmition}>ADD #{this.state.currentTasks.length +1}</button>
        </div>
        <div className="searching">
          <input onChange={this.handleQuery} placeholder="Search..." />
        </div>
      </div>
    )
  }
}