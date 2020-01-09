import React from 'react';

export const Button = (props) => {

    const btnClass = () => {
        let result = `btn 
            ${props.color ? props.color : ''} 
            ${props.icon ? 'icon' : ''} 
            ${props.small ? 'small' : ''}
            ${props.disabled ? 'disabled' : ''}
            ${props.size ? props.size : ''}
            ${props.block ? 'block' : ''}`
        return result.trim()
    }

    return (
        <button 
            disabled={props.disabled}
            className={btnClass()} 
            onClick={props.onAction}>
            {props.name}
            {props.children}
        </button>
    )
}
