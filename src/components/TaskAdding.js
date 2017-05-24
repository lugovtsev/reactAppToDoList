import React from 'react';

const TasksAdding = ({pressHandler}) => {

    return (
      <div className="add-task">
        <input type="text" id="add-input" onKeyDown={pressHandler} placeholder="Add new task..." />
        <span id="show-important-tasks" className="icon-star-full" />
      </div>
    )

}

export default TasksAdding;
