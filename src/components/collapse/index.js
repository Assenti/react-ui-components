import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Icon, Tooltip } from '../index';
import { strinfigyClassObject } from '../utils';
import { measureSubmenu } from './utils';

const Collapse = (props) => {
    const [visible, setVisible] = useState(props.defaultState ? props.defaultState : false);
    const [height, setHeight] = useState('');
    const contentHeight = useRef();
    const getState = () => {
        if (props.controled) return props.visible;
        else return visible;
    }

    let className = {
        name: 'rui-collapse',
        border: props.border ? 'bordered' : '',
        title: props.title ? 'titled' : '',
        dark: props.dark ? 'dark' : '',
        position: !props.title ? (props.position ? props.position : 'right') : '',
        className: props.className ? props.className : ''
    }

    const transitionStyles = {
        entering: { height: getState() ? height : 0 },
        entered: { height: getState() ? height : 0 },
        exiting: { height: getState() ? height : 0 },
        exited: { height: getState() ? height : 0 }
    }

    const handleToggle = () => {
        if (props.onChange) props.onChange(!visible)
        setVisible(!visible)
    }

    useEffect(() => {
        setHeight(measureSubmenu(contentHeight.current).height)
    },[])

    return (
        <div className={strinfigyClassObject(className)}>
            <div className="rui-collapse-trigger">
                {props.title ? <span>{props.title}</span> : ''}
                <div className="row align-center">
                    {props.extra}
                    {!props.customToggler ?
                    (props.tooltip ?
                        <Tooltip tooltip={props.tooltip}>
                            <Icon 
                                name={props.icon ? props.icon : 'chevron-down'}
                                size={props.iconSize ? props.iconSize : ''}
                                color={props.iconColor ? props.iconColor : (props.dark ? '#fff' : '')}
                                className={getState() ? 'reverse' : ''} 
                                onClick={handleToggle}/>
                        </Tooltip> : 
                        <Icon name={props.icon ? props.icon : 'chevron-down'}
                            size={props.iconSize ? props.iconSize : ''}
                            color={props.iconColor ? props.iconColor : (props.dark ? '#fff' : '')}
                            className={getState() ? 'reverse' : ''} 
                            onClick={handleToggle}/>) :
                        <span onClick={handleToggle}>{props.customToggler}</span>
                    }
                </div>
            </div>
                <Transition
                    in={getState()}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    timeout={300}>
                    {state => (
                        <div
                            ref={contentHeight}
                            style={{ ...transitionStyles[state] }} 
                            className={getState() ? 
                                'rui-collapse__content active' 
                                : 'rui-collapse__content'}>
                            {props.children}
                        </div>
                    )}
                </Transition>
        </div>
    )
}
Collapse.propTypes = {
    defaultState: PropTypes.bool,
    controled: PropTypes.bool,
    visible: PropTypes.bool,
    onChange: PropTypes.func,
    border: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    position: PropTypes.oneOf([undefined,'','right']),
    extra: PropTypes.any,
    tooltip: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    iconColor: PropTypes.string,
    dark: PropTypes.bool,
    customToggler: PropTypes.node,
    className: PropTypes.string
}
export default Collapse;