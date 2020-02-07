import React, { useRef, useState } from 'react';
import { Icon } from './Icon';

export const InputField = (props) => {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'input-field',
            size: props.size ? props.size : '',
            lifted: props.lifted ? 'lifted' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded ? 'rounded' : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            light: props.light && !props.dark ? 'light' : '',
            dark: props.dark && !props.light ? 'dark' : '',
            disabled: props.disabled ? 'disabled' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleFocus = (e) => {
        if (props.onFocus) props.onFocus(e)
        setFocus(true)
    }

    const handleBlur = (e) => {
        if (props.onBlur) props.onBlur(e)
        setFocus(false)
    }

    return (
        <div className={inputFieldClass()} style={{ width: props.width ? props.width : ''}}>
            {props.label ? 
            <label className={focus ? 'active' : ''} onClick={() => input.current.focus()}>{props.label}</label> 
            : ''}
            <div className={focus ? 'input-container focus' : 'input-container'}>
                {props.prefix ? props.prefix : ''}
                <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={input}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    type={props.type}/>
                {props.value && props.clearable ? <i onClick={() => {props.onClear()}}><Icon name="close" size={20}/></i> : ''}
                {props.suffix ? props.suffix : ''}
            </div>
            {props.hint ? <div className="input-field__hint">{props.hint}</div> : ''}
        </div>
    )
}

export const TextareaField = (props) => {
    const inputFieldClass = () => {
        let result = `input-field ${props.medium ? 'medium' : ''} ${props.large ? 'large' : ''}`
        return result.trim()
    }

    const inputContainerClass = () => {
        let result = `input-container ${props.color ? props.color : ''}`
        return result.trim()
    }

    return (
        <div className={inputFieldClass()} style={{ width: props.width ? props.width : ''}}>
            {props.label ? <label>{props.label}</label> : ''}
            <div className={inputContainerClass()}>
                <textarea
                    rows={props.rows}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    type={props.type}/>
                <i onClick={() => {
                    console.log('clicked')
                    props.onClear()
                }}><Icon name="close"/></i>
            </div>
        </div>
    )
}
