import React from 'react';
import * as func from '../utils/Functions';

const TasksList = ({list, toggleHandler, favoriteHandler, visibleDone}) => {
    let doneList = list.map((task, index) => {
      let taskDate = func.formatDate(task.changingDate, 'd');
        return (
          (task.done) ?
          <div key={index} className="task-item done">
            <input value={index} type="checkbox" onChange={toggleHandler} checked="checked"/>
            <div className="task-item__text">
              <p>{task.task} - {taskDate}</p>
            </div>
          </div> : null
        )
    })

    return (
      <div id="completed-tasks-list" style={visibleDone}>
        {doneList}
      </div>
    )
}

export default TasksList;
