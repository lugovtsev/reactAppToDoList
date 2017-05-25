import React from 'react';

const TasksList = ({taskStatus, list, toggleHandler, favoriteHandler}) => {
  if (taskStatus === 'actual') {
    let actualList = list.map((task) => {
        return (
          (!task.done) ?
          <div key={task.id} className="task-item">
            <input value={task.id} type="checkbox" onChange={toggleHandler}/>
            <div className="task-item__text">
              <p>{task.task}</p>
            <span id={task.id} onClick={favoriteHandler} className={task.favorite ? 'star icon-star-full' : 'star icon-star-empty'}></span>
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
    let doneList = list.map((task) => {
        return (
          (task.done) ?
          <div key={task.id} className="task-item done">
            <input value={task.id} type="checkbox" onChange={toggleHandler} checked="checked"/>
            <div className="task-item__text">
              <p>{task.task}</p>
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

export default TasksList;
