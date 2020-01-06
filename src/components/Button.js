import React from 'react';

export const Button = (props) => {

    const btnClass = () => {
        let result = `btn ${props.color ? props.color : ''} ${props.icon ? 'icon' : ''} ${props.small ? 'small' : ''}`
        return result.trim()
    }

    return (
        <button className={btnClass()} 
            onClick={() => props.onAction()}>
            {props.name}
            {props.children}
        </button>
    )
}
