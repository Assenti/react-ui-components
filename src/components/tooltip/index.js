import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Tooltip = (props) => {
    const [show, setShow] = useState(false);

    const tooltipClass = () => {
        let result = '';
        let className = {
            name: 'tooltip',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }
   
    return (
        <div className={tooltipClass()}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <CSSTransition
                in={show}
                timeout={300}
                classNames="tooltip"
                unmountOnExit>
                <div>{props.tooltip}</div>
            </CSSTransition>
            {props.children}
        </div>
    )
}
