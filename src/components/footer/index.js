import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const className = () => {
        let result = '';
        let className = {
            name: 'rui-footer',
            dark: props.dark ? 'dark' : '',
            centered: props.centered ? 'centered' : '',
            fixed: props.fixed ? 'fixed' : '',
            color: props.color ? props.color : '',
            smooth: props.smooth ? 'smooth' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={className()}>
            {props.children}
        </div>
    )
}
Footer.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dark: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'default','','primary','info','success','error','secondary']),
    smooth: PropTypes.bool,
    fixed: PropTypes.bool,
    className: PropTypes.string
}
export default Footer;