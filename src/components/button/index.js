import React from 'react';
import { Icon } from '../icon';

export const Button = (props) => {
    const btnClass = () => {
        let result = '';
        let className = {
            btn: 'btn',
            lifted: props.lifted ? 'lifted' : '',
            loading: props.loading ? 'loading' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded && !props.smooth ? 'rounded' : '',
            color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : '',
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
        if (props.icon && !props.iconLeft) return 'btn__text mr-5';
        else if (props.icon && props.iconLeft) return 'btn__text ml-5';
        else return 'btn__text';
    }

    return (
        <button
            ref={props.ref ? props.ref : null} 
            style={{...props.style}}
            disabled={props.disabled || props.loading}
            className={btnClass()} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.loading ?
                <Icon name="loading" color="gray"/> :
                <React.Fragment>
                    {props.icon && props.iconLeft ? 
                        (props.iconAllotted ? 
                            <div className="btn__allotted-icon"><Icon size={20} name={props.icon}/></div> :
                            <Icon size={20} name={props.icon}/>
                        )
                        : ''
                    }
                    {props.name ? <div className={setMargin()}>{props.name}</div> : ''}
                    {props.icon && !props.iconLeft ? 
                        (props.iconAllotted ? 
                            <div className="btn__allotted-icon"><Icon size={20} name={props.icon}/></div> :
                            <Icon size={20} name={props.icon}/>    
                        ) : ''
                    }
                </React.Fragment>
            }
            
        </button>
    )
}
