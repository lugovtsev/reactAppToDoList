import React from 'react';


const Controls = ({visibleDone, showDone, removeDone}) => {
  return (
    <div className="controls" >
      <span id="show-completed-tasks" onClick={showDone}>Show completed tasks</span>
      <span style={visibleDone} id="remove-completed-tasks" onClick={removeDone} className="icon-bin" />

  </div>
  )
}

export default Controls;
