import React from 'react';
import { Link } from 'react-router-dom';


const GroupIcon = ({id}) => {
  return(
    <div className="group-icon icon">
      <Link to={{ pathname: `/details/${id}`}} >
        {<img src={process.env.PUBLIC_URL + '/group.svg'} alt="group" />}
      </Link>
    </div>
  )
}
export default GroupIcon;
