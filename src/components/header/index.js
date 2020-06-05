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
            style={{ 
                height: props.height ? props.height : '',
                backgroundColor: props.bgColor ? props.bgColor : '',
                padding: props.padding ? props.padding : ''
            }}>
            {props.children}
        </div>
    )
}
Header.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    bgColor: PropTypes.string,
    sticky: PropTypes.bool,
    smooth: PropTypes.bool,
    lifted: PropTypes.bool,
    id: PropTypes.string,
    padding: PropTypes.string,
    className: PropTypes.string
}
export default Header;