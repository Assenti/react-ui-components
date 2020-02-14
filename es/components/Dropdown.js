import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Dropdown = (props) => {
    const [visible, setVisible] = useState(false);

    const menuClass = () => {
        let result = '';
        let className = {
            name: 'dropdown-container',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={menuClass()} 
            tabIndex={-1}
            onBlur={() => setVisible(false)}>
            <div onClick={() => setVisible(true)}>{props.trigger}</div>
            <CSSTransition
                in={visible}
                timeout={300}
                classNames="dropdown"
                unmountOnExit>
                <div className="dropdown" 
                    style={{ width: props.width ? props.width : '', minWidth: props.minWidth ? props.minWidth : ''}}>
                    <div onClick={() => setVisible(false)}>{props.content}</div>
                </div>
            </CSSTransition>
        </div>
    )
}
