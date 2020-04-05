import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Avatar = (props) => {
    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-avatar',
            transparent: props.transparent ? 'transparent' : '',
            color: props.color ? props.color : 'secondary',
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
                width: props.size ? props.size : 40,
                height: props.size ? props.size : 40
            }}>
            {props.img && !props.icon ? <img src={props.img} alt=""/> : null}
            {props.icon && !props.img ? 
                <Icon name={props.icon} size={props.iconSize} color={props.iconColor}/> : null}
        </div>
    )
}
Avatar.propTypes = {
    color: PropTypes.oneOf([undefined,'','secondary', 'primary', 'info', 'success', 'error']),
    size: PropTypes.number,
    borderType: PropTypes.oneOf([undefined,'','tile','rounded']),
    img: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconColor: PropTypes.string,
    transparent: PropTypes.bool,
    className: PropTypes.string
}
Avatar.defaultProps = {
    color: 'secondary',
    size: 40
}
export default Avatar;