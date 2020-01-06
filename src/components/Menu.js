import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Menu = (props) => {
    return (
        <CSSTransition
        in={props.menu}
        timeout={300}
        classNames="menu"
        unmountOnExit>
            <div className="menu">
                {props.title ? <div className="menu-title">{props.title}</div> : ''}
                {props.items.map((item, index) => 
                    <div key={index} className="menu-item" onClick={() => props.onSelect(item)}>{item}</div>
                )}
            </div>
        </CSSTransition>
    )
}
