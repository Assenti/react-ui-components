import React from 'react';
import { Icon } from '../icon';

export const Tag = (props) => {
    const tagClass = () => {
        let result = '';
        let className = {
            btn: 'rui-tag',
            lifted: props.lifted ? 'lifted' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded && !props.smooth ? 'rounded' : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            small: props.small ? 'small' : '',
            outlined: props.outlined ? 'outlined' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={tagClass()} style={{ width: props.width ? props.width : ''}}>
            {props.iconLeft ? <Icon name={props.iconLeft}/> : ''}
            {props.value}
            {props.iconRight ? <Icon name={props.iconRight}/> : ''}
        </div>
    )
}
