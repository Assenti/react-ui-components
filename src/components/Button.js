import React from 'react';
import { Icon } from './Icon';

export const Button = (props) => {
    const btnClass = () => {
        let result = `btn 
            ${props.color ? props.color : ''} 
            ${props.icon ? 'icon' : ''} 
            ${props.small ? 'small' : ''}
            ${props.disabled ? 'disabled' : ''}
            ${props.size ? props.size : ''}
            ${props.block ? 'block' : ''}`
        return `${result.trim()} ${props.className ? props.className : ''}`
    }

    return (
        <button 
            disabled={props.disabled}
            className={btnClass()} 
            onClick={props.onAction}>
            {props.name}
            {props.icon ? <Icon size={20} color={props.dark ? '#fff' : ''} name={props.icon}/> : ''}
        </button>
    )
}
