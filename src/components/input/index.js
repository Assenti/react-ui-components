import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '../icon';

export const InputField = (props) => {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-field',
            whiteBackground: props.whiteBackground ? 'white-background' : '',
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

    const handleClear = () => {
        setFocus(false)
        props.onClear()
    }

    useEffect(() => {
        if (props.autoFocus) input.current.focus();
    }, [])

    return (
        <div className={inputFieldClass()} 
            style={{ width: props.width ? props.width : ''}}>
            {props.label ? 
            <label className={focus ? 'active' : ''} 
                onClick={() => input.current.focus()}>{props.label}</label> 
            : ''}
            <div className={focus ? 'rui-input-container focus' : 'rui-input-container'}>
                {props.prefix ? <span className="rui-input-prefix">{props.prefix}</span> : ''}
                <input
                    style={{ 
                        paddingLeft: props.prefix ? 0 : '',
                        paddingRight: props.suffix ? 0 : ''
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={input}
                    tabIndex={props.tabIndex}
                    readOnly={props.readOnly || !props.onChange ? true : false}
                    disabled={props.disabled}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    type={props.type ? props.type : 'text'}/>
                {props.value && props.clearable ? 
                    <Icon name="close" 
                        onClick={() => props.onClear ? handleClear() : {}} 
                        className="rui-input-clear"/> : ''}
                {props.suffix ? <span className="rui-input-suffix">{props.suffix}</span> : ''}
            </div>
            {props.hint ? <div className="rui-input-field__hint">{props.hint}</div> : ''}
        </div>
    )
}

export const TextareaField = (props) => {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);
    const [rows, setRows] = useState(props.rows ? props.rows : 1);
    const [minRows] = useState(props.rows ? props.rows : 1)
    const [maxRows] = useState(props.maxRows ? props.maxRows : 10);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-field',
            whiteBackground: props.whiteBackground ? 'white-background' : '',
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

    const handleClear = () => {
        setFocus(false)
        props.onClear()
    }

    const handleChange = (e) => {
        const textareaLineHeight = 24;
		const previousRows = e.target.rows;
        e.target.rows = minRows;
            
        const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
        
        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }
            
        if (currentRows >= maxRows) {
            e.target.rows = maxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }

        if (props.onChange) props.onChange(e)
        
        setRows(currentRows < maxRows ? currentRows : maxRows)
    }

    useEffect(() => {
        if (props.autoFocus) input.current.focus();
        if (!props.value) setRows(props.rows ? props.rows : 1)
    }, [props.value])

    return (
        <div className={inputFieldClass()} style={{ width: props.width ? props.width : ''}}>
            {props.label ? 
            <label className={focus ? 'active' : ''} 
                onClick={() => input.current.focus()}>{props.label}</label> 
            : ''}
            <div className={focus ? 'rui-input-container focus' : 'rui-input-container'}>
                {props.prefix ? <span className="rui-input-prefix">{props.prefix}</span> : ''}
                <textarea
                    style={{ 
                        paddingLeft: props.prefix ? 0 : '',
                        paddingRight: props.suffix ? 0 : ''
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={input}
                    rows={rows}
                    tabIndex={props.tabIndex}
                    readOnly={props.readOnly || !props.onChange ? true : false}
                    disabled={props.disabled}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={handleChange}
                    type={props.type ? props.type : 'text'}></textarea>
                {props.value && props.clearable ? 
                    <Icon name="close" 
                        onClick={() => props.onClear ? handleClear() : {}} 
                        className="rui-input-clear"/> : ''}
                {props.suffix ? <span className="rui-input-suffix">{props.suffix}</span> : ''}
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
