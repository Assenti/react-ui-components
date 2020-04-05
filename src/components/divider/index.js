import React from 'react';
import PropTypes from 'prop-types';

const Divider = (props) => {
    const className = () => {
        let result = '';
        let className = {
            name: 'rui-divider',
            vertical: props.vertical ? 'vertical' : '',
            color: props.color ? props.color : 'secondary',
            dark: props.dark ? 'dark' : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={className()}></div>
    )
}
Divider.propTypes = {
    vertical: PropTypes.bool,
    color: PropTypes.oneOf(['primary','secondary','info','success','error']),
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default Divider;