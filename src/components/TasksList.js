import React from 'react';

const TasksList = ({list, toggleHandler}) => {
  console.log(list);
  let actualList = list.map((task) => {
    console.log(task);
      return (
        <h2>ewe</h2>
        (!task.done) ?
        <div key={task.id} className="task-item">
          <input value={task.id} type="checkbox" onChange={toggleHandler}/>
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

export default TasksList;
