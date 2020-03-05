import React from 'react';
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
            small: props.small ? 'small' : '',
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
                <Icon name="loading" color="gray" size={props.iconSize ? props.iconSize : ''}/> :
                <React.Fragment>
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
                </React.Fragment>
            }
            
        </button>
    )
}

export default Button;