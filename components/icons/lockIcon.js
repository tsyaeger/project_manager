import React from 'react';

const LockIcon = (props) => {
  return(
    <div className="lock-icon icon">
      {<img src={process.env.PUBLIC_URL + '/locked.svg'} alt="locked" />}
    </div>
  )
}
export default LockIcon;
