import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Modal = (props) => {
    return (
        <div className={props.visible ? 'modal-container' : 'modal-container hidden'}
            onClick={() => props.closable ? props.onClose() : {}}>
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="modal"
                unmountOnExit
                onEnter={() => props.onEnter ? props.onEnter() : {}}
                onExited={() => props.onExited ? props.onExited() : {}}>
                <div className="modal">
                    <div className="modal-header">{props.header}</div>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    )
}
