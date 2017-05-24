import React from 'react';

const TasksListDone = ({list, toggleHandler}) => {
  let doneList = list.map((task, index) => {
      return (
        (task.done) ?
        <div key={index} className="task-item done">
          <input value={index} type="checkbox" onChange={toggleHandler} checked="checked"/>
          <div className="task-item__text">
            <p>{task.task}</p>
            <span className="star icon-star-full"></span>
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

export default TasksListDone;
