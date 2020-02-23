import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../icon';

export const Modal = (props) => {
    const modalContainerClass = () => {
        let result = '';
        let className = {
            name: 'rui-modal-container',
            hidden: props.visible ? '' : 'hidden',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const modalClass = () => {
        let result = '';
        let className = {
            name: 'rui-modal',
            dark: props.dark ? 'dark' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }


    const close = (e) => {
        if (e.target === e.currentTarget) props.onClose()
    }

    return (
        <div className={modalContainerClass()}
            onClick={(e) => props.closable ? close(e) : {}}>
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="modal"
                unmountOnExit>
                <div className={modalClass()}>
                    <div className="rui-modal-header">
                        <div>{props.header}</div>
                        <Icon name="close" 
                            onClick={() => props.onClose ? props.onClose() : {}}/>
                    </div>
                    <div className="rui-modal-content">{props.children}</div>
                    {props.footer ? <div className="rui-modal-footer">{props.footer}</div> : ''}
                </div>
            </CSSTransition>
        </div>
    )
}
