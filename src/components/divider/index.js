import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Divider = (props) => {
    let className = {
        name: 'rui-divider',
        vertical: props.vertical ? 'vertical' : '',
        color: props.color ? props.color : 'secondary',
        dark: props.dark ? 'dark' : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}></div>
    )
}
Divider.propTypes = {
    vertical: PropTypes.bool,
    color: PropTypes.oneOf(['primary','secondary','info','success','error']),
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default Divider;