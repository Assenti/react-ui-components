import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Card = React.forwardRef((props, ref) => {
    let className = {
        card: 'rui-card',
        flat: props.flat ? 'flat' : '',
        dark: props.dark ? 'dark' : '',
        hover: props.hover ? 'hover' : '',
        outlined: props.outlined ? 'outlined' : '',
        color: props.color ? props.color : '',
        className: props.className ? props.className : ''
    }

    return (
        <div className={strinfigyClassObject(className)}
            onClick={(e) => props.onClick ? props.onClick(e) : {}}
            ref={ref} 
            style={props.style}>
            {props.header ? <div className="rui-card-header">{props.header}</div> : ''}
            {props.children}
            {props.footer ? <div className="rui-card-footer">{props.footer}</div> : ''}
        </div>
    )
})
Card.propTypes = {
    color: PropTypes.oneOf([undefined,'','primary','info','success','error','gray']),
    onClick: PropTypes.func,
    flat: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    outlined: PropTypes.bool,
    header: PropTypes.any,
    footer: PropTypes.any,
    style: PropTypes.any,
    className: PropTypes.string
}
export default Card;