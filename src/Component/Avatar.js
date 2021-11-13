import React from 'react';


const Avatar = (props) => {
    return (
        <img
            className="card-img m-3 rounded-circle"
            src={props.image}
            alt="Student" style={{ width: "18%" }} />
    );
}

export default Avatar;