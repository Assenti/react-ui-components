import React, { useRef } from 'react';
import { Icon } from './Icon';

export const InputField = (props) => {
    const input = useRef(null);

    const inputFieldClass = () => {
        let result = `input-field ${props.medium ? 'medium' : ''} ${props.large ? 'large' : ''}`
        return `${result.trim()} ${props.className ? props.className : ''}`
    }

    const inputContainerClass = () => {
        let result = `input-container ${props.color ? props.color : ''}`
        return result.trim()
    }

    return (
        <div className={inputFieldClass()} style={{ width: props.width ? props.width : ''}}>
            {props.label ? <label onClick={() => input.current.focus()}>{props.label}</label> : ''}
            <div className={inputContainerClass()}>
                <input
                    ref={input}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    type={props.type}/>
                <i onClick={() => {
                    props.onClear()
                }}><Icon name="close"/></i>
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
