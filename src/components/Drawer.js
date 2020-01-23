import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

export const Drawer = (props) => {
    const drawerClass = () => { 
        let result = `drawer ${props.min ? 'min' : ''} 
                    ${props.absolute ? 'absolute' : ''} 
                    ${props.fullHeight ? 'full-height' : ''}
                    ${props.dark ? 'dark' : ''}`
        return result.trim()
    }

    const headerTitle = () => {
        if (props.header) {
            if (props.header.length > 5) return `${props.header.slice(0,5)}...`
            else return props.header
        }
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
                        {props.header ? <div className={props.headerCentered ? 
                                'drawer-header centered' : 'drawer-header'}>
                                    {props.header}</div> : ''}
                        {props.children}
                    </div>
                    <div className="drawer-footer">
                        <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                            <Button
                                dark={props.dark}
                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                onAction={() => props.onResize()}/>
                        </Tooltip>
                    </div>
                </div>
            </CSSTransition>
        </CSSTransition>
    )
}
