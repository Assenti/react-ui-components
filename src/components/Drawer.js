import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './Button';
import { Tooltip } from './Tooltip';
import { Icon } from './Icon';
import reactLogo from '../img/logo.svg';

export const Drawer = (props) => {
    const drawerClass = () => { 
        let result = `drawer ${props.min ? 'min' : ''} 
                    ${props.absolute ? 'absolute' : ''} 
                    ${props.fullHeight ? 'full-height' : ''}
                    ${props.dark ? 'dark' : ''}`
        return result.trim()
    }

    return (
        <CSSTransition
            in={props.drawer}
            timeout={300}
            classNames="drawer"
            unmountOnExit>
            <CSSTransition
                in={props.min}
                timeout={300}
                classNames="expand">
                <div className={drawerClass()}>
                    <div className="drawer-content">
                        <div className="drawer-header">
                            <img src={reactLogo} alt="React logo"/>
                        </div>
                        {props.children}
                    </div>
                    <div className="drawer-footer">
                        <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                            <Button
                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                onAction={() => props.onResize()}/>
                        </Tooltip>
                    </div>
                </div>
            </CSSTransition>
        </CSSTransition>
    )
}
