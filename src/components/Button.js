import React from 'react';

export const Button = (props) => {
    return (
        <button className={props.icon ? 'btn icon' : 'btn'} 
            onClick={() => props.onAction()}>
            {props.name}
        </button>
    )
}
