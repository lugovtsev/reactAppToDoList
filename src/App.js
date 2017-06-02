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
    this.removeDone = this.removeDone.bind(this);
  }

  insertTask(text) {
    let url = `http://lugovtsev.ru/api/?new=${text}&time=${Date.now()}`;
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        let newList = this.state.list;
        newList.unshift({id: json, text: text, changingDate: Date.now(), favorite: false, done: false});
        this.setState({
          list: newList
        })
      }).catch(err => {
        console.log(err)
      })
  }

  updateTask(id, upd, val, time) {
    let url = `http://lugovtsev.ru/api/?id=${id}&upd=${upd}&val=${+val}&time=${time}`;
    fetch(url)
      .catch(err => {
        console.log(err)
      })
  }

  deleteDoneDB(arr) {
    function implode( glue, pieces ) {
      return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
    }
    let getStr = 'arrDone[]=' + implode('&arrDone[]=', arr);
    let url = `http://lugovtsev.ru/api/?del&${getStr}`;
    fetch(url)
      .catch(err => {
        console.log(err)
      })
  }

  loadTasksList(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({
          list: json
        });
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
    let currentTask = newList[event.target.value];
    currentTask.done = !currentTask.done;
    this.upDate(newList, event.target.value);
    this.setState({
      list: newList
    })
    this.updateTask(currentTask.id, 'done', currentTask.done, Date.now())
  }

  addTaskHandler(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
      this.insertTask(event.target.value);
      event.target.value ='';
    }
  }

  favoriteHandler(event) {
    let newList = this.state.list;
    let currentTask = newList[event.target.id];
    currentTask.favorite = !currentTask.favorite;
    this.upDate(newList, event.target.id);
    this.setState({
      list: newList
    })
    this.updateTask(currentTask.id, 'favorite', currentTask.favorite, Date.now())
  }

  showJustFav() {
    this.setState({
      justFavorite: !this.state.justFavorite
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
      //удаление из базы
      let doneList = allList.map((task) => {
        return task.done ? task.id : 0;
      });
      doneList = doneList.filter((i) => {return i > 0});
      this.deleteDoneDB(doneList);
      //console.log(doneList);
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
