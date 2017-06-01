import React, { Component } from 'react';
import TaskAdding from './components/TaskAdding';
import TasksList from './components/TasksList';
import Controls from './components/Controls';
import DoneTasksList from './components/DoneTasksList';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        // {task: 'to do something 1', changingDate: 1495768660991, favorite: true, done: false},
        // {task: 'to do something 2', changingDate: 1495718670991, favorite: true, done: false},
        // {task: 'to do something 3', changingDate: 1495778680991, favorite: false, done: false},
        // {task: 'to do something 4', changingDate: 1495798690991, favorite: false, done: true}
      ],
      justFavorite: false,
      visibleDone: { display: 'none' }
    }
    this.checkedHandler = this.checkedHandler.bind(this);
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
    this.showJustFav = this.showJustFav.bind(this);
    this.showDone = this.showDone.bind(this);
    this.loadTasksList = this.loadTasksList.bind(this);
  }

  loadTasksList(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        console.log(json);
        this.setState({
          list: json
        })
      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    this.loadTasksList('https://lugovtsev.ru/api/?all');
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
    this.upDate(newList, event.target.id);
    this.setState({
      list: newList
    })
  }

  showJustFav() {
    this.setState({
      justFavorite: this.state.justFavorite ? false : true
    })
  }

  showDone () {
    this.setState({
      visibleDone: (this.state.visibleDone.display === 'none') ? {display: 'block'} : {display: 'none'}
    })
  }

  removeDone() {
    let isSure = window.confirm("А ю шура?");
    if (isSure) {
      let allList = this.state.list;
      let newList = allList.filter((task) => {
        return !task.done;
      });
      this.setState({
        list: newList
      })
    }
  }

  render() {
    return (
      <div className="content">
        <h1>MyList <span className="icon-star-empty"></span></h1>
        <TaskAdding pressHandler={this.addTaskHandler} showJustFav={this.showJustFav}/>
        <TasksList
          justFavorite={this.state.justFavorite}
          favoriteHandler={this.favoriteHandler}
          list={this.state.list}
          toggleHandler={this.checkedHandler} />
        <Controls
          visibleDone={this.state.visibleDone}
          removeDone={this.removeDone}
          showDone={this.showDone} />
        <DoneTasksList
          list={this.state.list}
          toggleHandler={this.checkedHandler}
          visibleDone={this.state.visibleDone} />
      </div>
    );
  }
}

export default App;
