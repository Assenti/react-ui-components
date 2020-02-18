import React, { useState } from 'react';
import { Icon } from '../icon';
import { Tooltip } from '../tooltip';
import { CSSTransition } from 'react-transition-group';

export const Collapse = (props) => {
    const [visible, setVisible] = useState(props.defaultState ? props.defaultState : false);

    const collapseClass = () => {
        let result = '';
        let className = {
            name: 'collapse',
            border: props.border ? 'bordered' : '',
            title: props.title ? 'titled' : '',
            position: !props.title ? (props.position ? props.position : 'right') : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={collapseClass()}>
            <div className="collapse-trigger">
                {props.title ? <span>{props.title}</span> : ''}
                {props.tooltip ?
                    <Tooltip tooltip={props.tooltip}>
                        <Icon name={props.icon ? props.icon : 'chevron-down'}
                            size={props.iconSize ? props.iconSize : ''}
                            color={props.iconColor ? props.iconColor : 'gray'}
                            className={visible ? 'reverse' : ''} 
                            onClick={() => setVisible(!visible)}/>
                    </Tooltip> : 
                    <Icon name={props.icon ? props.icon : 'chevron-down'}
                        size={props.iconSize ? props.iconSize : ''}
                        color={props.iconColor ? props.iconColor : 'gray'}
                        className={visible ? 'reverse' : ''} 
                        onClick={() => setVisible(!visible)}/>
                }
            </div>
            <CSSTransition
                in={visible}
                timeout={150}
                classNames="collapse"
                unmountOnExit>
                <div className="collapse-content"
                    style={{...props.contentStyles}}>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    )
}
