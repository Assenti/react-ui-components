import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Menu = (props) => {
    const handleSelect = (item) => {
        props.onClose()
        props.onSelect(item)
    }
    return (
        <div className="menu-container" 
            tabIndex={-1}
            onBlur={() => props.onClose()}>
            {props.trigger}
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="menu"
                unmountOnExit>
                <div className="menu">
                    {props.title ? <div className="menu-title">{props.title}</div> : ''}
                    {props.items.map((item, index) => 
                        <div key={index} 
                            className="menu-item" 
                            onClick={() => handleSelect(item)}>{item}</div>
                    )}
                </div>
            </CSSTransition>
        </div>
    )
}
