import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component{
  render(){
    return(
      this.props.currentTasks.filter(t => t.toUpperCase().indexOf(this.props.query.toUpperCase()) !== -1)
      .map((t, i) => (<Task name={t} key={i} handleDeletion={this.props.handleDeletion} />))
      )
  }
}

export default TasksList;