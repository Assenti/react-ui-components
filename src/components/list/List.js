import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const List = (props) => {
    let className = {
        list: 'rui-list',
        grid: props.grid ? 'grid' : '',
        size: props.size ? props.size : '',
        dark: props.dark ? 'dark' : ''
    }

    return (
        <div className={`rui-list-container ${props.className ? props.className : ''}`}>
            {props.header ? <div className="rui-list-header">{props.header}</div> : ''}
            <div className={strinfigyClassObject(className)}>
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