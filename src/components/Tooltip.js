import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Tooltip = (props) => {
    const [show, setShow] = useState(false);
    const tooltipClass = () => {
        let result = `tooltip ${props.position ? props.position : ''}`;
        return result;
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
