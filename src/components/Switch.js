import React from 'react';
import { Icon } from './Icon';

export const Switch = (props) => {
    const switchClass = () => {
        let result = '';
        let className = {
            btn: 'switch',
            active: props.check ? 'active' : 'disactive',
            disabled: props.disabled ? 'disabled' : '',
            color: props.color ? props.color : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className="switch-container">
            {props.leftLabel && !props.leftIcon ? <div className="switch-left-label">{props.leftLabel}</div> : ''}
            {props.leftIcon && !props.leftLabel ? <Icon name={props.leftIcon} color={props.leftIconColor}/> : ''}
            <div className={switchClass()} 
                onClick={() => !props.disabled ? props.onChange() : {}}>
                <span></span>
            </div>
            {props.rightIcon && !props.rightLabel ? <Icon name={props.rightIcon} color={props.rightIconColor}/> : ''}
            {props.rightLabel && !props.rightIcon ? <div className="switch-right-label">{props.rightLabel}</div> : ''}
        </div>
    )
}
