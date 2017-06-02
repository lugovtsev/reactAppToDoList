import React from 'react';
import * as func from '../utils/Functions';

const TasksList = ({justFavorite, list, toggleHandler, favoriteHandler}) => {
  function compareObj(a, b) {
    if (a.changingDate > b.changingDate) return -1;
    if (a.changingDate < b.changingDate/* && b.favorite*/) return 1;
  }
  list.sort(compareObj);
  let actualList = list.map((task, index) => {
    let taskDate = func.formatDate(task.changingDate, 't');
    let condition = !task.done;
    if (justFavorite) condition = !task.done && task.favorite;
    return (
      (condition) ?
      <div key={index} className="task-item">
        <input value={index} type="checkbox" onChange={toggleHandler}/>
        <div className="task-item__text">
          <p>{task.text} - {taskDate}</p>
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
