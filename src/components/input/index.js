import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const InputField = (props) => {
    const input = useRef(null);
    const [focus, setFocus] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [isPassword, setIsPassword] = useState(props.type === 'password' ? true : false);

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

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-field',
            whiteBackground: props.whiteBackground ? 'white-background' : '',
            size: props.size ? props.size : '',
            lifted: props.lifted ? 'lifted' : '',
            borderType: props.borderType ? props.borderType : '',
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
        if (e.currentTarget === e.target) {
           if (props.onBlur) props.onBlur(e)
            setFocus(false) 
        }
    }

    const handleClear = () => {
        setFocus(false)
        props.onClear()
        setIsChanged(false)
    }

    const handleChange = (e) => {
        if (props.onChange) {
            setIsChanged(true)
            if (props.uppercase) {
                e.target.value = e.target.value.toUpperCase()
            }
            props.onChange(e)
        }
    }

    const handleKeyUp = (e) => {
        if (props.onEnter) {
            if (e.key === 'Enter') {
                props.onEnter()
            }
        } else if (props.onKeyUp) {
            props.onKeyUp(e)
        }
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

    const getInputType = () => {
        if (props.type === 'password') {
            return isPassword ? 'password' : 'text';
        } else if (props.type === 'number') {
            return 'number';
        } else if (props.type === 'email') {
            return 'email';
        } else {
            return 'text';
        }
    }

    const handlePassTypeChange = (e) => {
        setIsPassword(!isPassword)
    }

    useEffect(() => {
        if (props.autoFocus) input.current.focus();
    }, [])

    return (
        <div className={inputFieldClass()} 
            style={{ width: props.width ? props.width : ''}}>
            {props.label ? 
            <label className={focus ? 'active' : ''} 
                onClick={() => input.current.focus()}>{props.required ? <span className="text-error">*</span> : ''} {props.label}</label> 
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
                    autoComplete={props.autoComplete ? '' : 'off'}
                    name={props.name}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    value={props.value}
                    onKeyUp={handleKeyUp}
                    onKeyDown={props.onKeyDown}
                    placeholder={props.placeholder} 
                    onChange={handleChange}
                    type={getInputType()}/>
                {props.value && props.clearable ? 
                    <Icon 
                        name="close" 
                        onClick={() => props.onClear ? handleClear() : {}} 
                        className="rui-input-clear"/> : ''}
                {props.suffix ? 
                    <span className="rui-input-suffix">{props.suffix}</span> :
                    (props.type === 'password' ? 
                    <Icon 
                        className="rui-input-clear"
                        name={isPassword ? 'eye' : 'eye-off'} 
                        onClick={handlePassTypeChange}/> : '')
                }
            </div>
            {props.hint ? 
                <div className={getHintColor()}>{props.hint}</div> : ''}
        </div>
    )
}
InputField.propTypes = {
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    onEnter: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf([undefined,'text','password','number','email']),
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoComplete: PropTypes.bool,
    name: PropTypes.string,
    clearable: PropTypes.bool,
    onClear: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    lifted: PropTypes.bool,
    autoFocus: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'primary','info','success', 'error']),
    disabled: PropTypes.bool,
    borderType: PropTypes.oneOf([undefined,'','tile','smooth','rounded']),
    uppercase: PropTypes.bool,
    size: PropTypes.oneOf([undefined,'','medium','large']),
    prefix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.number,
    max: PropTypes.number,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    whiteBackground: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    className: PropTypes.string
}
InputField.defaultProps = {
    color: 'primary',
    type: 'text'
}
export default InputField;