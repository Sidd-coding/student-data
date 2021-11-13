import React from 'react';


function Stunote(props) {
    return (
        <div className=" m-2 p-2">
            <span>
                {props.data?.note}
                {props.data?.category}
                {props.data?.choices?.map(choice => <div key={choice.id}>

                    <div>
                        {choice.emoji} {choice.name}
                    </div>
                </div>)}
            </span>
        </div>
    );
}

export default Stunote;