import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './Button';

export const Drawer = (props) => {
    const drawerClass = () => { 
        return `drawer ${props.min ? 'min' : ''} ${props.absolute ? 'absolute' : ''}`
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
                    <Button
                        icon={props.min ? true : false} 
                        name={props.min ? '>' : 'Collapse'}
                        onAction={() => props.onResize()}/>
                </div>
            </CSSTransition>
        </CSSTransition>
    )
}
