import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Badge = (props) => {
    let className = {
        btn: 'rui-badge-container',
        rounded: props.rounded ? 'rounded' : '',
        color: props.color ? props.color : 'secondary',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}
            style={props.style}
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.parent}
            <div className={props.visible ? 'rui-badge' : 'rui-badge hide'}>
                {props.visible && !props.icon ? props.value : ''}
                {props.visible && !props.value && props.icon ? 
                    <Icon 
                        name={props.icon} 
                        size={14} 
                        color={props.color === 'secondary' ? '' : '#fff'}/> : ''}
            </div>
        </div>
    )
}
Badge.propTypes = {
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    color: PropTypes.oneOf(['primary','info','success','error','dark','secondary']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    visible: PropTypes.bool,
    parent: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
}
export default Badge;