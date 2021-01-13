import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Avatar = (props) => {
    let className = {
        name: 'rui-avatar',
        dark: props.dark ? 'dark' : '',
        lifted: props.lifted ? 'lifted' : '',
        transparent: props.transparent ? 'transparent' : '',
        borderType: props.borderType ? props.borderType : '', 
        className: props.className ? props.className : ''
    }

    return (
        <div 
            ref={props.avatarRef}
            className={strinfigyClassObject(className)} 
            style={props.style}
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.img && !props.icon && !props.initials ? <img src={props.img} alt=""/> : null}
            {props.initials && !props.icon && !props.img ? <span style={{ fontSize: props.fontSize }}>{props.initials}</span> : null}
            {props.icon && !props.img && !props.initials ? 
                <Icon 
                    name={props.icon} 
                    size={props.iconSize} 
                    color={props.iconColor ? props.iconColor : (props.dark ? '#fff' : '')}/> : null}
        </div>
    )
}
Avatar.propTypes = {
    style: PropTypes.object,
    borderType: PropTypes.oneOf(['default','smooth','tile','rounded']),
    img: PropTypes.string,
    icon: PropTypes.string,
    lifted: PropTypes.bool,
    initials: PropTypes.string,
    initialsFontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconColor: PropTypes.string,
    transparent: PropTypes.bool,
    dark: PropTypes.bool,
    ref: PropTypes.any,
    onClick: PropTypes.func,
    avatarRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    className: PropTypes.string
}
export default Avatar;