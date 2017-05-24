import React, { Component } from 'react';
import TasksList from './components/TasksList';
import TaskAdding from './components/TaskAdding';
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
    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  checkedHandler(event) {
    let newList = this.state.list;
    newList[event.target.value].done = (newList[event.target.value].done) ? false : true;
    this.setState({
      list: newList
    })
  }

  addTaskHandler(event) {
    if (event.keyCode === 13) {
      let newList = this.state.list;
      newList.push({task: event.target.value, done: false});
      event.target.value ='';
      this.setState({
        list: newList
      })
    }
  }

  render() {
    return (
      <div className="content">
        <h1>MyList <span className="icon-star-empty"></span></h1>
        <TaskAdding pressHandler={this.addTaskHandler}/>
        <TasksList taskStatus="actual" list={this.state.list} toggleHandler={this.checkedHandler} />
        <div className="controls">
          <span id="show-completed-tasks">Show completed tasks</span>
          <span id="remove-completed-tasks" className="icon-bin" />
        </div>
        <TasksList taskStatus="done" list={this.state.list} toggleHandler={this.checkedHandler} />
      </div>
    );
  }
}

export default App;
