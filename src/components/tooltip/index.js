import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
    const tooltipClass = () => {
        let result = '';
        let className = {
            name: 'rui-tooltip',
            color: props.color && props.color !== 'default' ? props.color : '',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }
   
    return (
        <div className={tooltipClass()}>
            <span className="rui-tooltip__text">{props.tooltip}</span>
            {props.children}
        </div>
    )
}
Tooltip.propTypes = {
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    position: PropTypes.oneOf([undefined,'','bottom','left','right']),
    tooltip: PropTypes.string,
    className: PropTypes.string
}
export default Tooltip;