import React from 'react';
import Avatar from './Avatar';
import Profile from './Profile';
import Stunote from './Stunote';



const Header = (props) => {
    console.log(props.student);
    return (
        <div className="card">

            <div className="card-header bg-white" >
                <h3 className="text-center">
                    Notes from {props.student.name}
                </h3>
            </div>
            <div className="card-body">
                <div className="card border-white">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center">
                            <Avatar image={props.student.image} />
                            <Profile name={props.student.name} time={props.student.remaining_time} />
                        </div>
                    </div>
                </div>
            </div>
            {props.student.studata?.map((datastu, index) => (
                <Stunote data={datastu} key={index} />
            ))}

        </div>

    );
}

export default Header;