import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const TextareaField = (props) => {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);
    const [rows, setRows] = useState(props.rows ? props.rows : 1);
    const [minRows] = useState(props.rows ? props.rows : 1)
    const [maxRows] = useState(props.maxRows ? props.maxRows : 10);
    const [isChanged, setIsChanged] = useState(false);

    const getInputColor = () => {
        if (props.required) {
            if (isChanged && !props.value) {
                return 'error';
            } else {
                return props.color ? props.color : 'primary';
            }
        } else {
            return props.color ? props.color : 'primary';
        }
    }

    const componentClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-field',
            whiteBackground: props.whiteBackground ? 'white-background' : '',
            borderType: props.borderType && props.borderType !== 'rounded' ? props.borderType : '',
            lifted: props.lifted ? 'lifted' : '',
            color: getInputColor(),
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

        if (props.onChange) {
            if (props.uppercase) {
                e.target.value = e.target.value.toUpperCase()
            } else props.onChange(e) 
            setIsChanged(true)
        }
        
        setRows(currentRows < maxRows ? currentRows : maxRows)
    }

    const getHintColor = () => {
        if (props.hintColor) {
            return `rui-input-field__hint ${props.hintColor}`
        } else {
            if (props.required) {
                if (isChanged && !props.value) {
                    return 'rui-input-field__hint error'
                } else {
                    return 'rui-input-field__hint'
                }
            } else {
                return 'rui-input-field__hint'
            }
        }
    }

    useEffect(() => {
        if (props.autoFocus) input.current.focus();
        if (!props.value) setRows(props.rows ? props.rows : 1)
    }, [props.value])

    return (
        <div className={componentClass()} style={{ width: props.width ? props.width : ''}}>
            {props.label ? 
            <label className={focus ? 'active' : ''} 
                onClick={() => input.current.focus()}>{props.required ? <span className="text-error">*</span> : ''} {props.label}</label> 
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
                    value={props.value}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} 
                    onChange={handleChange}></textarea>
                {props.value && props.clearable ? 
                    <Icon name="close" 
                        onClick={() => props.onClear ? handleClear() : {}} 
                        className="rui-input-clear"/> : ''}
                {props.suffix ? <span className="rui-input-suffix">{props.suffix}</span> : ''}
            </div>
            {props.hint ? 
                <div className={getHintColor()}>{props.hint}</div> : ''}
        </div>
    )
}
TextareaField.propTypes = {
    whiteBackground: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    hintColor: PropTypes.oneOf([undefined,'','error','success']),
    readOnly: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    borderType: PropTypes.oneOf([undefined,'','tile','smooth']),
    rows: PropTypes.number,
    maxRows: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    autoFocus: PropTypes.bool,
    onClear: PropTypes.func,
    clearable: PropTypes.bool,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    lifted: PropTypes.bool
}
export default TextareaField; 