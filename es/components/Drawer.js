import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './button/Button';
import { Tooltip } from './Tooltip';

export const Drawer = (props) => {
    const [isXs, setIsXs] = useState(false);

    const drawerClass = () => {
        let result = '';
        let className = {
            name: 'drawer',
            collapsable: props.collapsable ? 'collapsable' : '',
            smooth: props.smooth ? 'smooth' : '',
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

    const handleClose = (e) => {
        e.preventDefault();
        if (e.currentTarget === e.target) {
            if (props.onClose) props.onClose()
        } 
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 529) {
                setIsXs(false)
            } else {
                setIsXs(true)
            }
        })
    }, [])

    return (
        <React.Fragment>
            {isXs ?
            <CSSTransition
                in={props.drawer}
                timeout={100}
                classNames="drawer-background"
                unmountOnExit>
                <div className={props.drawer ? 
                        'drawer-background' : 
                        'drawer-background none'} 
                        onClick={handleClose}>
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
                                    {props.collapsable ? <div className="drawer-footer">
                                        <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                                            <Button
                                                dark={props.dark}
                                                light={props.dark ? false : true}
                                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                                onClick={() => props.onResize()}/>
                                        </Tooltip>
                                    </div> : ''}
                                </div>
                            
                        </CSSTransition>
                    </CSSTransition>
                </div>
            </CSSTransition> :
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
                            {props.collapsable ? <div className="drawer-footer">
                                <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                                    <Button
                                        dark={props.dark}
                                        light={props.dark ? false : true}
                                        icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                        onClick={() => props.onResize()}/>
                                </Tooltip>
                            </div> : ''}
                        </div>
                    
                </CSSTransition>
            </CSSTransition>
            }
        </React.Fragment>
    )
}
