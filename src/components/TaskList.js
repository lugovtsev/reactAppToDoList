import React from 'react';

const TasksList = () => {
  return (
    <div id="tasks-list">
        <div class="task-item"><input type="checkbox"> <div class="task-item__text"><p>Buy something</p><span class="star icon-star-full"></span></div></div>
        <div class="task-item"><input type="checkbox"> <div class="task-item__text"><p>Read the book</p><span class="star icon-star-empty"></span></div></div>
      </div>
  )
}

export default TasksList;
