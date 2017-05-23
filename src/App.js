import React, { Component } from 'react';
import TasksList from './components/TasksList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        id1=> {task: 'to do something 1', done: false},
        id2=> {task: 'to do something 2', done: false},
        id3=> {task: 'to do something 3', done: true},
        id4=> {task: 'to do something 4', done: false}
      ]
    }
    this.checkedHandler = this.checkedHandler.bind(this);
  }
  checkedHandler(event) {
    console.log(event.target.value);
    let newList = this.state.list;
    console.log(newList[event.target.value].done);

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
        <TasksList list={this.state.list} toggleHandler={this.checkedHandler} />
        <div className="controls">
          <span id="show-completed-tasks">Show completed tasks</span>
          <span id="remove-completed-tasks" className="icon-bin" />
        </div>
        <div id="completed-tasks-list" className="hidden">
          <div className="task-item done"><input type="checkbox" onChange={this.checkedHandler} checked /> <div className="task-item__text"><p>Play the game</p><span className="star icon-star-full"></span></div></div>
        <div className="task-item done"><input type="checkbox" onChange={this.checkedHandler} checked /> <div className="task-item__text"><p>Do exercise</p><span className="star icon-star-empty"></span></div></div>
        </div>
      </div>
    );
  }
}

export default App;
