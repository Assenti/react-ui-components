import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const cardClass = () => {
        let result = '';
        let className = {
            card: 'rui-card',
            flat: props.flat ? 'flat' : '',
            dark: props.dark ? 'dark' : '',
            hover: props.hover ? 'hover' : '',
            outlined: props.outlined ? 'outlined' : '',
            color: props.color ? props.color : '',
            className: props.className ? props.className : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={cardClass()}
            ref={props.setRef} 
            style={{ 
                width: props.width ? props.width : '', 
                minWidth: props.minWidth ? props.minWidth : '',
                padding: props.padding ? props.padding : '' 
            }}>
            {props.title && props.outlined ? <div className="rui-card-title">{props.title}</div> : ''}
            {props.header ? <div className="rui-card-header">{props.header}</div> : ''}
            {props.img ? <img src={props.img} alt=""/> : ''}
            {props.children}
            {props.footer ? <div className="rui-card-footer">{props.footer}</div> : ''}
        </div>
    )
}
Card.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.oneOf([undefined,'','primary','info','success','error','gray']),
    flat: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    outlined: PropTypes.bool,
    title: PropTypes.any,
    header: PropTypes.any,
    img: PropTypes.string,
    footer: PropTypes.any,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string
}
export default Card;