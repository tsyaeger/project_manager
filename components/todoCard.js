import React from 'react';
import LockIcon from './icons/lockIcon';
import CompletedIcon from './icons/completedIcon';
import TodoCheckbox from './todoCheckbox';

const TodoCard = ({id, title, isComplete, isUnlocked, handleCheck}) => {

  const todoStyle = {
    color: "#494949",
    textDecoration: "none"
  }

  const renderTask = () => {
    if(isComplete) {
      todoStyle['textDecoration'] = "line-through"
      return <CompletedIcon />
    }
    else if (!isUnlocked) {
      todoStyle['color'] = "#9B9B9B"
      return <LockIcon />
    }
    else {
      return <TodoCheckbox id={id} handleCheck={handleCheck} />
    }
  }

  return(
    <div className="todo">
      <div>{renderTask()}</div>
      <div className="card-details-wrapper">
        <p style={todoStyle}>{title}</p>
      </div>
    </div>
  )
}

export default TodoCard;
