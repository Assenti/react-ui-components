import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Dropdown = (props) => {
    const [visible, setVisible] = useState(false);

    const dropdownClass = () => {
        let result = '';
        let className = {
            name: 'rui-dropdown-container',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={dropdownClass()} 
            tabIndex={-1}
            onBlur={() => props.closeManaged ? {} : setVisible(false)}>
            <div onClick={() => setVisible(true)}>{props.trigger}</div>
            <CSSTransition
                in={props.closeManaged ? props.visible : visible}
                timeout={300}
                classNames="dropdown"
                unmountOnExit>
                <div className="rui-dropdown" 
                    style={{ 
                        width: props.width ? props.width : '', 
                        minWidth: props.minWidth ? props.minWidth : '',
                        right: props.rightOffset && !props.legtOffset ? props.rightOffset : '',
                        left: props.legtOffset && !props.rightOffset ? props.legtOffset : ''
                    }}>
                    <div className="rui-dropdown__content" 
                        onClick={() => props.closeManaged ? {} : setVisible(false)}>
                            {props.content}
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
