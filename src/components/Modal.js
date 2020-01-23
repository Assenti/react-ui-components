import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Modal = (props) => {

    const close = (e) => {
        if (e.target === e.currentTarget) props.onClose()
    }

    return (
        <div className={props.visible ? 'modal-container' : 'modal-container hidden'}
            onClick={(e) => props.closable ? close(e) : {}}>
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="modal"
                unmountOnExit
                onEnter={() => props.onEnter ? props.onEnter() : {}}
                onExited={() => props.onExited ? props.onExited() : {}}>
                <div className="modal">
                    <div className="modal-header">{props.header}</div>
                    <div className="modal-content">{props.children}</div>
                    {props.footer ? <div className="modal-footer">{props.footer}</div> : ''}
                </div>
            </CSSTransition>
        </div>
    )
}
