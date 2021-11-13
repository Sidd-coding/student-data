import React from 'react';


const Profile = (props) => {

    const dateFormat = (date) => {
        const d = new Date(date);
        return `${d.getMonth() + 1}/${d.getDate()}`
    }

    return (
        <div className="card-body ">
            <h4 className="">
                {props.name}
            </h4>
            <span className="text-secondary">
                Notes left on {dateFormat(props.time)}
            </span>
        </div>

    );
}

export default Profile;