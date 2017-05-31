import React from 'react';
import * as func from '../utils/Functions';

const TasksList = ({justFavorite, list, toggleHandler, favoriteHandler}) => {
  let actualList = list.map((task, index) => {
    let taskDate = func.formatDate(task.changingDate, 't');
    let condition = !task.done;
    if (justFavorite) condition = !task.done && task.favorite;
    return (
      (condition) ?
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
}


export default TasksList;
