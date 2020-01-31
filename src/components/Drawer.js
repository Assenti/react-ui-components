import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

export const Drawer = (props) => {
    const drawerClass = () => {
        let result = '';
        let className = {
            btn: 'drawer',
            min: props.min ? 'min' : '',
            absolute: props.absolute ? 'absolute' : '',
            fullHeight: props.fullHeight ? 'full-height' : '',
            dark: props.dark && !props.light ? 'dark' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
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
                                light={props.dark ? false : true}
                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                onClick={() => props.onResize()}/>
                        </Tooltip>
                    </div>
                </div>
            </CSSTransition>
        </CSSTransition>
    )
}
