import React from 'react';
import * as func from '../utils/Functions';
const TasksList = ({taskStatus, list, toggleHandler, favoriteHandler}) => {
  if (taskStatus === 'actual') {

    /*
    let actualList = list.map((task, index) => {
      let taskDate = func.formatDate(task.changingDate, 't');
      return (
        (!task.done) ?
        <div key={index} className="task-item">
          <input value={index} type="checkbox" onChange={toggleHandler}/>
          <div className="task-item__text">
            <p>{task.task} - {taskDate}</p>
          <span id={index} onClick={favoriteHandler} className={task.favorite ? 'star icon-star-full' : 'star icon-star-empty'}></span>
          </div>
        </div> : null
      )
    })
*/

function compareTime(a, b) {
  if (a.changingDate > b.changingDate ) return 1;
  if (a.changingDate < b.changingDate) return -1;
}

let actualList = list.sort((task, index) => {
  let taskDate = func.formatDate(task.changingDate, 't');
  return (
    (!task.done) ?
    <div key={index} className="task-item">
      <input value={index} type="checkbox" onChange={toggleHandler}/>
      <div className="task-item__text">
        <p>{task.task} - {taskDate}</p>
        <span id={index} onClick={favoriteHandler} className={task.favorite ? 'star icon-star-full' : 'star icon-star-empty'}></span>
      </div>
    </div> : null
  )
})

    return (
      <div id="tasks-list">
        {actualList}
      </div>
    )


  } else if (taskStatus === 'done') {
    let doneList = list.map((task, index) => {
      let taskDate = func.formatDate(task.changingDate, 'd');
        return (
          (task.done) ?
          <div key={index} className="task-item done">
            <input value={index} type="checkbox" onChange={toggleHandler} checked="checked"/>
            <div className="task-item__text">
              <p>{task.task} - {taskDate}</p>
            </div>
          </div> : null
        )
    })

    return (
      <div id="completed-tasks-list" className="hidden">
        {doneList}
      </div>
    )
  }
}


const Task = () => {
  return (
    <h2>апр</h2>
  )
}

export default TasksList;
