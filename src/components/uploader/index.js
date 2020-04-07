import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Uploader = (props) => {
    const inputFile = useRef();
    const [focus, setFocus] = useState(false);

    const inputFieldClass = () => {
        let result = '';
        let className = {
            input: 'rui-input-uploader',
            dark: props.dark ? 'dark' : '',
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
            {props.label ? <div className="rui-input-uploader__label">{props.label}</div> : ''}
            <div className={inputContainer()}>
                <Icon name="download" size={20}/>
                {props.placeholder ? <label onClick={() => inputFile.current.focus()}>{props.placeholder}</label> : ''}
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
                <div className={props.borderType === 'rounded' ? 'rui-input-uploader__items rounded' : 'rui-input-uploader__items'}>
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
Uploader.propTypes = {
    value: PropTypes.array,
    borderType: PropTypes.oneOf([undefined,'','rounded','smooth','tile']),
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    light: PropTypes.bool,
    dark: PropTypes.bool,
    label: PropTypes.string,
    lifted: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    title: PropTypes.string,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onDelete: PropTypes.func,
    className: PropTypes.string
}
export default Uploader;