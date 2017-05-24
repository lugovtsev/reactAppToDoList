import React, { Component } from 'react';
import TasksListActual from './components/TasksListActual';
import TasksListDone from './components/TasksListDone';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {task: 'to do something 1', done: false},
        {task: 'to do something 2', done: false},
        {task: 'to do something 3', done: true},
        {task: 'to do something 4', done: true}
      ]
    }
    this.checkedHandler = this.checkedHandler.bind(this);
  }
  checkedHandler(event) {
    let newList = this.state.list;
    newList[event.target.value].done = (newList[event.target.value].done) ? false : true;
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div className="content">
        <h1>MyList <span className="icon-star-empty"></span></h1>
        <div className="add-task">
          <input type="text" id="add-input" placeholder="Add new task..." />
          <span id="show-important-tasks" className="icon-star-full" />
        </div>
        <TasksListActual list={this.state.list} toggleHandler={this.checkedHandler} />
        <div className="controls">
          <span id="show-completed-tasks">Show completed tasks</span>
          <span id="remove-completed-tasks" className="icon-bin" />
        </div>
        <TasksListDone list={this.state.list} toggleHandler={this.checkedHandler} />
      </div>
    );
  }
}
/*
App.defaultProps = {
  status: "actual"
}
*/
export default App;
