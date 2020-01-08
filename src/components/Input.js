import React from 'react';
import { Close } from '../icons';

export const InputField = (props) => {
    const inputFieldClass = () => {
        let result = `input-field ${props.medium ? 'medium' : ''} ${props.large ? 'large' : ''}`
        return result.trim()
    }

    const inputContainerClass = () => {
        let result = `input-container ${props.color ? props.color : ''}`
        return result.trim()
    }

    return (
        <div className={inputFieldClass()}>
            {props.label ? <label>{props.label}</label> : ''}
            <div className={inputContainerClass()}>
                <input
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
                }}><Close/></i>
            </div>
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
        <div className={inputFieldClass()}>
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
                }}><Close/></i>
            </div>
        </div>
    )
}
