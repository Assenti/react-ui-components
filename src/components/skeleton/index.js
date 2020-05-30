import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Skeleton = (props) => {
    let className = {
        name: 'rui-skeleton',
        active: !props.active ? 'active' : '',
        rounded: props.rounded ? 'rounded' : '',
        className: props.className ? props.className : ''
    }
    return (
        <div className={strinfigyClassObject(className)}
            style={{ 
                width: props.width ? props.width : '100%',
                height: props.height ? props.height : '100%'
            }}/>
    )
}
Skeleton.propTypes = {
    active: PropTypes.bool,
    rounded: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string
}
export default Skeleton;