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
                ...props.style,
                width: props?.style?.width ? props?.style?.width : '100%',
                height: props?.style?.height ? props?.style?.height : '100%'
            }}/>
    )
}
Skeleton.propTypes = {
    active: PropTypes.bool,
    rounded: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string
}
export default Skeleton;