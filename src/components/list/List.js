import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const List = (props) => {
    let className = {
        list: 'rui-list',
        grid: props.grid ? 'grid' : '',
        size: props.size ? props.size : '',
        scroll: props.maxHeight ? 'overflow-y' : '',
        dark: props.dark ? 'dark' : ''
    }

    return (
        <div className={`rui-list-container ${props.className ? props.className : ''}`}
            id={props.id}>
            {props.header ? <div className="rui-list-header">{props.header}</div> : ''}
            <div className={strinfigyClassObject(className)}>
                {props.children}
            </div>
        </div>
    )
}
List.propTypes = {
    size: PropTypes.oneOf(['default','medium','large']),
    dark: PropTypes.bool,
    grid: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    className: PropTypes.string
}
export default List;