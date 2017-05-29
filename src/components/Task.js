import React from 'react';

const Task = ({task, index}) => {
  return (
    <div key={index} className="task-item">
      <input value={index} type="checkbox" onChange={toggleHandler}/>
      <div className="task-item__text">
        <p>{task.task} - {taskDate}</p>
      <span id={index} onClick={favoriteHandler} className={task.favorite ? 'star icon-star-full' : 'star icon-star-empty'}></span>
      </div>
    </div>
  )
}

export default Task;
