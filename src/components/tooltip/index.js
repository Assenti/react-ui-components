import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Tooltip = (props) => {
    let className = {
        name: 'rui-tooltip',
        color: props.color && props.color !== 'default' ? props.color : '',
        position: props.position ? props.position : '',
        className: props.className ? props.className : ''
    }
   
    return (
        <div className={strinfigyClassObject(className)}>
            <span className="rui-tooltip__text">{props.tooltip}</span>
            {props.children}
        </div>
    )
}
Tooltip.propTypes = {
    color: PropTypes.oneOf([undefined,'','default','primary','info','success','error']),
    position: PropTypes.oneOf([undefined,'','top','bottom','left','right']),
    tooltip: PropTypes.string.isRequired,
    className: PropTypes.string
}
export default Tooltip;