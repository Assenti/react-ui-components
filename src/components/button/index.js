import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon } from '../index';

const Button = (props) => {
    const btnClass = () => {
        let result = '';
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
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const setMargin = () => {
        if (props.icon && !props.iconLeft) return 'rui-btn__text mr-5';
        else if (props.icon && props.iconLeft) return 'rui-btn__text ml-5';
        else return 'rui-btn__text';
    }

    return (
        <button
            type={props.type ? props.type : 'button'}
            ref={props.setRef ? props.setRef : null} 
            disabled={props.disabled || props.loading}
            className={btnClass()} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.loading ?
                <Icon name="loading" color="gray" size={20}/> :
                <>
                    {props.icon && props.iconLeft ? 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon"><Icon size={20} name={props.icon}/></div> :
                            <Icon size={20} name={props.icon}/>
                        )
                        : ''
                    }
                    {props.name ? <div className={setMargin()}>{props.name}</div> : ''}
                    {props.icon && !props.iconLeft ? 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon"><Icon size={20} name={props.icon}/></div> :
                            <Icon size={20} name={props.icon}/>    
                        ) : ''
                    }
                </>
            }
            
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error','black','secondary']),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    lifted: PropTypes.bool,
    uppercase: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    borderType: PropTypes.oneOf([undefined,'','tile','rounded','smooth']),
    icon: PropTypes.string,
    size: PropTypes.oneOf([undefined,'','medium','large']),
    block: PropTypes.bool,
    outlined: PropTypes.bool,
    iconAllotted: PropTypes.bool,
    iconLeft: PropTypes.bool,
    type: PropTypes.string,
    setRef: PropTypes.any,
    className: PropTypes.string
}
Button.defaultProps = {
    color: 'secondary'
}
export default Button;