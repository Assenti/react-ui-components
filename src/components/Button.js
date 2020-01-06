import React from 'react';

export const Button = (props) => {
    const btnClass = () => {
        return `btn ${props.color} ${props.icon ? 'icon' : ''}`
    }

    return (
        <button className={btnClass()} 
            onClick={() => props.onAction()}>
            {props.name}
        </button>
    )
}
