import React from 'react';

const TasksListActual = ({list, toggleHandler}) => {
  let actualList = list.map((task, index) => {
      return (
        (!task.done) ?
        <div key={index} className="task-item">
          <input value={index} type="checkbox" onChange={toggleHandler}/>
          <div className="task-item__text">
            <p>{task.task}</p>
            <span className="star icon-star-full"></span>
          </div>
        </div> : null
      )
  })

  return (
    <div id="tasks-list">
      {actualList}
    </div>
  )
}

export default TasksListActual;
