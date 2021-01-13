import React from 'react';
import PropTypes from 'prop-types'; 
import { strinfigyClassObject } from '../utils';

const Button = (props) => {
    let className = {
        btn: 'rui-btn',
        lifted: props.lifted ? 'lifted' : '',
        loading: props.loading ? 'loading' : '',
        uppercase: props.uppercase ? 'uppercase' : '',
        borderType: props.borderType ? props.borderType : '',
        color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : 'secondary',
        light: props.light && !props.dark ? 'light' : '',
        dark: props.dark && !props.light ? 'dark' : '',
        icon: props.icon && !props.name ? 'icon' : '',
        disabled: props.disabled || props.loading ? 'disabled' : '',
        size: props.size ? props.size : '',
        block: props.block ? 'block' : '',
        outlined: props.outlined ? 'outlined' : '',
        allotted: props.iconAllotted ? 'allotted' : '',
        iconLeft: props.iconLeft ? 'icon-left' : '',
        className: props.className ? props.className : ''
    }

    const setMargin = () => {
        if (props.icon && !props.iconLeft) return 'rui-btn__text mr-5';
        else if (props.icon && props.iconLeft) return 'rui-btn__text ml-5';
        else return 'rui-btn__text';
    }

    return (
        <button
            type={props.type ? props.type : 'button'}
            ref={props.btnRef} 
            id={props.id}
            disabled={props.disabled || props.loading}
            className={strinfigyClassObject(className)}
            style={props.style} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.loading ?
                <div className="rui-btn-loading">{props.loadingContent ?? 'Loading...'}</div> :
                <>
                    {props.icon && 
                        props.iconLeft && 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon">{props.icon}</div> : props.icon)}
                    {props.name ? <div className={setMargin()}>{props.name}</div> : ''}
                    {props.icon && 
                    !props.iconLeft && 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon">{props.icon}</div> : props.icon)}
                </>
            }
        </button>
    )
}
Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['default','primary','info','success','error','black','secondary']),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    lifted: PropTypes.bool,
    uppercase: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    borderType: PropTypes.oneOf(['default','tile','rounded','smooth']),
    size: PropTypes.oneOf(['default','medium','large']),
    block: PropTypes.bool,
    outlined: PropTypes.bool,
    icon: PropTypes.node,
    iconAllotted: PropTypes.bool,
    iconLeft: PropTypes.bool,
    type: PropTypes.oneOf(['button','submit','reset']),
    style: PropTypes.object,
    loadingContent: PropTypes.node,
    btnRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    id: PropTypes.string,
    className: PropTypes.string
}
export default Button;