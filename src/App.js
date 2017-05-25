import React, { Component } from 'react';
import TasksList from './components/TasksList';
import TaskAdding from './components/TaskAdding';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {task: 'to do something 1', favorite: false, done: false},
        {task: 'to do something 2', favorite: true, done: false},
        {task: 'to do something 3', favorite: false, done: false},
        {task: 'to do something 4', favorite: false, done: true}
      ]
    }
    this.checkedHandler = this.checkedHandler.bind(this);
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
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
      newList.unshift({task: event.target.value, favorite: false, done: false});
      event.target.value ='';
      this.setState({
        list: newList
      })
    }
  }

  favoriteHandler(event) {
    console.log(event.target.id);
    let newList = this.state.list;
    newList[event.target.id].favorite = (newList[event.target.id].favorite) ? false : true;
    let movingObj = newList.splice(event.target.id,1);
    /*function array_values (input) {
      var tmpArr = []
      var key = ''
      for (key in input) {
        tmpArr[tmpArr.length] = input[key]
      }
      return tmpArr
    }
    newList = array_values(newList);*/
    if (newList[event.target.id].favorite) {
      newList.unshift(movingObj[0]);
    } else {
      newList.push(movingObj[0]);
    }

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
