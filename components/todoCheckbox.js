import React from 'react';

const TodoCheckbox = ({id, handleCheck}) => {
  return(
    <div className="todo-checkbox icon">
      <input type="checkbox" onClick={() => handleCheck(id)}></input>
    </div>
  )
}
export default TodoCheckbox;
