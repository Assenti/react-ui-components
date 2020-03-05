import React from 'react';
import { Icon } from '../index';

const Badge = (props) => {
    const badgeClass = () => {
        let result = '';
        let className = {
            btn: 'rui-badge-container',
            rounded: props.rounded ? 'rounded' : '',
            color: props.color ? props.color : 'secondary',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={badgeClass()}>
            {props.parent}
            <div className={!props.visible ? 'rui-badge' : 'rui-badge hide'}>
                {!props.visible && !props.icon ? props.value : ''}
                {!props.visible && !props.value && props.icon ? 
                    <Icon 
                        name={props.icon} 
                        size={14} 
                        color={props.color === 'secondary' ? '' : '#fff'}/> : ''}
            </div>
        </div>
    )
}

export default Badge;