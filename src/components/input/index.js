import React, { useRef, useState } from 'react';
import { Icon } from '../icon';

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
                    readOnly={props.readOnly || !props.onChange ? true : false}
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

export const Uploader = (props) => {
    const inputFile = useRef();
    const [focus, setFocus] = useState(false);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'input-uploader',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const inputContainer = () => {
        let result = ''
        let className = {
            name: 'input-uploader__container',
            size: props.size ? props.size : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            light: props.light && !props.dark ? 'light' : '',
            dark: props.dark && !props.light ? 'dark' : '',
            lifted: props.lifted ? 'lifted' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded ? 'rounded' : '',
            disabled: props.disabled ? 'disabled' : ''
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
            <div className={inputContainer()}>
                <Icon name="download" size={20}/>
                {props.label ? <label onClick={() => inputFile.current.focus()}>{props.label}</label> : ''}
                <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputFile}
                    multiple={props.multiple ? true : false}
                    accept={props.accept ? props.accept : undefined}
                    title={props.title}
                    disabled={props.disabled}
                    required={props.required}
                    onChange={ e => props.onChange([...e.target.files])}
                    type="file"/>
                {props.value && props.value.length > 0 ? <span>{props.value.length}</span> : ""}
            </div>
            {props.value && props.value.length > 0 ? 
                <div className={props.rounded ? 'input-uploader__items rounded' : 'input-uploader__items'}>
                    {props.value.map((item, index) => 
                        <div key={index} className="input-uploader__item">
                            <span>{item.name}</span>
                            <Icon name="close" size={20} onClick={() => props.onDelete(item.name)}/>
                        </div>
                    )}
                </div>
            : ''}
        </div>
    )
}
