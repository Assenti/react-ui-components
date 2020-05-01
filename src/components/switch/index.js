import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Switch = (props) => {
    let className = {
        btn: 'rui-switch-container',
        size: props.size && props.size !== 'default' ? props.size : '',
        vertical: props.vertical ? 'vertical' : '',
        className: props.className ? props.className : ''
    }

    let classNameSwitch = {
        btn: 'rui-switch',
        active: props.check ? 'active' : 'disactive',
        double: props.leftLabel || props.leftIcon ? 'double' : '',
        disabled: props.disabled ? 'disabled' : '',
        color: props.color ? props.color : ''
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.leftLabel && !props.leftIcon ? <div className="rui-switch-left-label">{props.leftLabel}</div> : ''}
            {props.leftIcon && !props.leftLabel ? <Icon name={props.leftIcon} color={props.leftIconColor}/> : ''}
            <div className={strinfigyClassObject(classNameSwitch)} 
                onClick={() => !props.disabled ? props.onChange() : {}}>
                <span></span>
            </div>
            {props.rightIcon && !props.rightLabel ? <Icon name={props.rightIcon} color={props.rightIconColor}/> : ''}
            {props.rightLabel && !props.rightIcon ? <div className="rui-switch-right-label">{props.rightLabel}</div> : ''}
        </div>
    )
}
Switch.propTypes = {
    leftIcon: PropTypes.string,
    leftIconColor: PropTypes.string,
    rightIcon: PropTypes.string,
    rightIconColor: PropTypes.string,
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    disabled: PropTypes.bool,
    check: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    vertical: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    className: PropTypes.string
}
export default Switch;