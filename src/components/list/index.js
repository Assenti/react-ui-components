import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const listClass = () => {
        let result = '';
        let className = {
            list: 'rui-list',
            grid: props.grid ? 'grid' : '',
            size: props.size ? props.size : '',
            dark: props.dark ? 'dark' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={`rui-list-container ${props.className ? props.className : ''}`}>
            {props.header ? <div className="rui-list-header">{props.header}</div> : ''}
            <div className={listClass()}>
                {props.children}
            </div>
        </div>
    )
}
List.propTypes = {
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    dark: PropTypes.bool,
    grid: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    className: PropTypes.string
}
export default List;