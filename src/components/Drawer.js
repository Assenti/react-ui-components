import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './Button';
import { ChevronDoubleLeft, ChevronDoubleRight } from '../icons';
import reactLogo from '../img/logo.svg';

export const Drawer = (props) => {
    const drawerClass = () => { 
        let result = `drawer ${props.min ? 'min' : ''} ${props.absolute ? 'absolute' : ''}`
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
                        <Button
                            icon
                            onAction={() => props.onResize()}>
                            {props.min ? <ChevronDoubleRight color="#fff"/> : <ChevronDoubleLeft color="#fff"/>}
                        </Button>
                    </div>
                </div>
            </CSSTransition>
        </CSSTransition>
    )
}
