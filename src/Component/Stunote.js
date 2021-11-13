import React from 'react';


function Stunote(props) {
    return (
        <div className="m-2 ">
            <span>
                {props.data?.note}
                {/* <span className="">
                    {props.data?.category}
                </span> */}
                {/* {props.data?.choices?.map(choice => <div key={choice.id}>

                    <div>
                        {choice.emoji} {choice.name}
                    </div>
                </div>)} */}
            </span>
        </div>
    );
}

export default Stunote;