import React, { Component } from 'react';
import TasksList from './components/TasksList';
import TaskAdding from './components/TaskAdding';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {task: 'to do something 1', changingDate: 1495768660991, favorite: false, done: false},
        {task: 'to do something 2', changingDate: 1495718670991, favorite: true, done: false},
        {task: 'to do something 3', changingDate: 1495778680991, favorite: false, done: false},
        {task: 'to do something 4', changingDate: 1495798690991, favorite: false, done: true}
      ]
    }
    this.checkedHandler = this.checkedHandler.bind(this);
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
  }

  upDate(tasksArr, taskIndex) {
    tasksArr[taskIndex].changingDate = Date.now();
  }

  checkedHandler(event) {
    let newList = this.state.list;
    newList[event.target.value].done = (newList[event.target.value].done) ? false : true;
    this.upDate(newList, event.target.value);
    this.setState({
      list: newList
    })
  }

  addTaskHandler(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
      let newList = this.state.list;
      newList.unshift({task: event.target.value, changingDate: Date.now(), favorite: false, done: false});
      event.target.value ='';
      this.setState({
        list: newList
      })
    }
  }

  favoriteHandler(event) {
    let newList = this.state.list;
    newList[event.target.id].favorite = (newList[event.target.id].favorite) ? false : true;
    //let test = Date.now();
    this.upDate(newList, event.target.id);
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="content">
        <h1>MyList <span className="icon-star-empty"></span></h1>
        <TaskAdding pressHandler={this.addTaskHandler}/>
        <TasksList taskStatus="actual" favoriteHandler={this.favoriteHandler} list={this.state.list} toggleHandler={this.checkedHandler} />
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
