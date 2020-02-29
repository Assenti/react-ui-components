import React, { useState, useRef } from 'react';
import { Icon } from '../index';

const Uploader = (props) => {
    const inputFile = useRef();
    const [focus, setFocus] = useState(false);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-uploader',
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
            name: 'rui-input-uploader__container',
            size: props.size ? props.size : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            lifted: props.lifted ? 'lifted' : '',
            borderType: props.borderType ? props.borderType : '',
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
                <div className={props.rounded ? 'rui-input-uploader__items rounded' : 'rui-input-uploader__items'}>
                    {props.value.map((item, index) => 
                        <div key={index} className="rui-input-uploader__item">
                            <span>{item.name}</span>
                            <Icon name="close" size={20} onClick={() => props.onDelete(item.name)}/>
                        </div>
                    )}
                </div>
            : ''}
        </div>
    )
}

export default Uploader;