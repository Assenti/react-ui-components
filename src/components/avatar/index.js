import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Avatar = (props) => {
    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-avatar',
            dark: props.dark ? 'dark' : '',
            lifted: props.lifted ? 'lifted' : '',
            transparent: props.transparent ? 'transparent' : '',
            borderType: props.borderType ? props.borderType : '', 
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={componentClass()} 
            style={{
                width: props.width ? props.width : 100,
                minWidth: props.width ? props.width : 100,
                height: props.height ? props.height : 120
            }}>
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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    borderType: PropTypes.oneOf([undefined,'','default','smooth','tile','rounded']),
    img: PropTypes.string,
    icon: PropTypes.string,
    lifted: PropTypes.bool,
    initials: PropTypes.string,
    initialsFontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconColor: PropTypes.string,
    transparent: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default Avatar;