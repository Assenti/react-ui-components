import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Footer = (props) => {
    let className = {
        name: 'rui-footer',
        dark: props.dark ? 'dark' : '',
        centered: props.centered ? 'centered' : '',
        fixed: props.fixed ? 'fixed' : '',
        color: props.color ? props.color : '',
        smooth: props.smooth ? 'smooth' : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)} style={props.style}>
            {props.children}
        </div>
    )
}
Footer.propTypes = {
    style: PropTypes.any,
    dark: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error','secondary']),
    smooth: PropTypes.bool,
    fixed: PropTypes.bool,
    className: PropTypes.string
}
export default Footer;