import React from 'react';

export const Tooltip = (props) => {
    const tooltipClass = () => {
        let result = '';
        let className = {
            name: 'rui-tooltip',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }
   
    return (
        <div className={tooltipClass()}>
            <span className="rui-tooltip__text">{props.tooltip}</span>
            {props.children}
        </div>
    )
}
