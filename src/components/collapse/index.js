import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from '../index';
import { strinfigyClassObject } from '../utils';

const Collapse = (props) => {
    const [visible, setVisible] = useState(props.defaultState ? props.defaultState : false);
    let className = {
        name: 'rui-collapse',
        border: props.border ? 'bordered' : '',
        title: props.title ? 'titled' : '',
        dark: props.dark ? 'dark' : '',
        position: !props.title ? (props.position ? props.position : 'right') : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}>
            <div className="rui-collapse-trigger">
                {props.title ? <span>{props.title}</span> : ''}
                <div className="row align-center">
                    {props.extra}
                    {props.tooltip ?
                        <Tooltip tooltip={props.tooltip}>
                            <Icon name={props.icon ? props.icon : 'chevron-down'}
                                size={props.iconSize ? props.iconSize : ''}
                                color={props.iconColor ? props.iconColor : (props.dark ? '#fff' : '')}
                                className={visible ? 'reverse' : ''} 
                                onClick={() => setVisible(!visible)}/>
                        </Tooltip> : 
                        <Icon name={props.icon ? props.icon : 'chevron-down'}
                            size={props.iconSize ? props.iconSize : ''}
                            color={props.iconColor ? props.iconColor : (props.dark ? '#fff' : '')}
                            className={visible ? 'reverse' : ''} 
                            onClick={() => setVisible(!visible)}/>
                    }
                </div>
            </div>
            <div style={{ 
                    height: visible ? 'auto' : 0,
                    padding: visible ? '' : '0 5px'
                }} 
                className="rui-collapse__content">
                {props.children}
            </div>
        </div>
    )
}
Collapse.propTypes = {
    defaultState: PropTypes.bool,
    border: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    position: PropTypes.oneOf([undefined,'','right']),
    extra: PropTypes.any,
    tooltip: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    iconColor: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default Collapse;