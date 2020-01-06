import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Modal = (props) => {
    return (
        <div className="modal-container">
            <CSSTransition
                in={props.modal}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => props.onEnter()}
                onExited={() => props.onExited()}>
                <div className="modal">
                    <div className="modal-header">{props.heading}</div>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    )
}
