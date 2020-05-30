import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { CSSTransition } from 'react-transition-group';
import { strinfigyClassObject } from '../utils';

const Tag = (props) => {
    const [visible, setVisible] = useState(props.visible ? props.visible : true);
    let className = {
        name: 'rui-tag',
        lifted: props.lifted ? 'lifted' : '',
        uppercase: props.uppercase ? 'uppercase' : '',
        borderType: props.borderType ? (props.borderType === 'default' ? '' : props.borderType) : '',
        color: props.color ? props.color : 'primary',
        small: props.small && !props.tiny ? 'small' : '',
        tiny: props.tiny ? 'tiny' : '',
        outlined: props.outlined ? 'outlined' : '',
        className: props.className ? props.className : ''
    }

    const handleClose = () => {
        if (props.onClose && !props.disabled) {
            props.onClose()
            if (!props.onClick) setVisible(false)
        }
    }

    useEffect(() => {
        if (props.closable) setVisible(props.visible)
    }, [props.visible])

    return (
        <CSSTransition
            in={visible}
            timeout={300}
            classNames="rui-tag"
            mountOnEnter
            unmountOnExit>
            <div className={strinfigyClassObject(className)}
                style={props.style}
                ref={props.tagRef}
                onClick={props.onClick && !props.disabled ? props.onClick : null}>
                {props.iconLeft ? <Icon name={props.iconLeft}/> : ''}
                {props.value}
                {props.iconRight ? <Icon name={props.iconRight}/> : ''}
                {props.closable ? 
                    <Icon 
                        className="rui-tag__close" 
                        name="close"
                        color="gray" 
                        onClick={handleClose}/> : ''}
            </div>
        </CSSTransition>
    )
}
Tag.propTypes = {
    visible: PropTypes.bool,
    uppercase: PropTypes.bool,
    outlined: PropTypes.bool,
    lifted: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'secondary','primary', 'info', 'success', 'error', 'dark', 'yellow']),
    borderType: PropTypes.oneOf([undefined,'','default','tile','smooth','rounded']),
    small: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    style: PropTypes.any,
    onClose: PropTypes.func,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    closable: PropTypes.bool,
    disabled: PropTypes.bool,
    tagRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    className: PropTypes.string
}
export default Tag;