import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const headerClass = () => {
        let result = '';
        let className = {
            name: 'rui-header',
            dark: props.dark ? 'dark' : 'light',
            sticky: props.sticky ? 'sticky' : '',
            smooth: props.smooth ? 'smooth' : '',
            lifted: props.lifted ? 'lifted' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={headerClass()} 
            style={props.style}>
            {props.children}
        </div>
    )
}
Header.propTypes = {
    dark: PropTypes.bool,
    light: PropTypes.bool,
    sticky: PropTypes.bool,
    smooth: PropTypes.bool,
    lifted: PropTypes.bool,
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
}
export default Header;