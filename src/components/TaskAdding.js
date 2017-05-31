import React from 'react';

const TasksAdding = ({pressHandler, showJustFav}) => {
    return (
      <div className="add-task">
        <input type="text" id="add-input" onKeyDown={pressHandler} placeholder="Add new task..." />
        <span id="show-important-tasks" onClick={showJustFav} className="icon-star-full" />
      </div>
    )
}

export default TasksAdding;
