import React from 'react';
import GroupIcon from './icons/groupIcon';

const GroupCard = ({id, title, total, completed}) => {

  return(
    <div className="todo">
      <GroupIcon id={id}/>
      <div className="card-details-wrapper">
        <div className="groupname">
          <p>{title}</p>
        </div>
        <div className="group-status">
          <p>{`${completed} OF ${total} TASKS COMPLETE`}</p>
        </div>
      </div>
    </div>
  )
}

export default GroupCard;
