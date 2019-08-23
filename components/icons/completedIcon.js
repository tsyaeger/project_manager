import React from 'react';

const CompletedIcon = (props) => {
  return(
    <div className="completed-icon icon">
      {<img src={process.env.PUBLIC_URL + '/completed.svg'} alt="completed" />}
    </div>
  )
}
export default CompletedIcon;
