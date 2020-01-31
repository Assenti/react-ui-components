import React from 'react';
import { Icon } from './Icon';

export const Button = (props) => {
    const btnClass = () => {
        let result = '';
        let className = {
            btn: 'btn',
            lifted: props.lifted ? 'lifted' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded && !props.smooth ? 'rounded' : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            light: props.light && !props.dark ? 'light' : '',
            dark: props.dark && !props.light ? 'dark' : '',
            icon: props.icon && !props.name ? 'icon' : '',
            small: props.small ? 'small' : '',
            disabled: props.disabled ? 'disabled' : '',
            size: props.size ? props.size : '',
            block: props.block ? 'block' : '',
            outlined: props.outlined ? 'outlined' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const setMargin = () => {
        if (props.icon && !props.iconLeft) return 'mr-5';
        else if (props.icon && props.iconLeft) return 'ml-5';
        else return '';
    }

    return (
        <button 
            disabled={props.disabled}
            className={btnClass()} 
            onClick={(e) => props.onClick(e)}>
            {props.icon && props.iconLeft ? <Icon size={props.name ? 18 : 20} name={props.icon}/> : ''}
            {props.name ? <span className={setMargin()}>{props.name}</span> : ''}
            {props.icon && !props.iconLeft ? <Icon size={props.name ? 18 : 20} name={props.icon}/> : ''}
        </button>
    )
}
