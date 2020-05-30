import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Card = (props) => {
    let className = {
        card: 'rui-card',
        flat: props.flat ? 'flat' : '',
        dark: props.dark ? 'dark' : '',
        hover: props.hover ? 'hover' : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}
            onClick={(e) => props.onClick ? props.onClick(e) : {}}
            ref={props.cardRef}
            id={props.id} 
            style={props.style}>
            {props.header ? <div className="rui-card-header">{props.header}</div> : ''}
            {props.children}
            {props.footer ? <div className="rui-card-footer">{props.footer}</div> : ''}
        </div>
    )
}
Card.propTypes = {
    onClick: PropTypes.func,
    flat: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    header: PropTypes.any,
    footer: PropTypes.any,
    style: PropTypes.any,
    id: PropTypes.string,
    cardRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    className: PropTypes.string
}
export default Card;