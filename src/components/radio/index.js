import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Radio = (props) => {
    let className = {
        name: 'rui-radio',
        color: props.color ? props.color : 'primary',
        size: props.size && props.size !== 'default' ? props.size : '',
        disabled: props.disabled ? 'disabled' : '',
        className: props.className ? props.className : ''
    }

    return (
        <label className={strinfigyClassObject(className)}>
            <input
                type="radio" 
                name={props.name} 
                value={props.value}
                checked={props.value}
                disabled={props.disabled} 
                onChange={e => props.onChange(e)}/>
                <span className="rui-radio-checkmark"></span>
            {props.label}
        </label>
    )
}

const RadioGroup = (props) => {
    let className = {
        btn: 'rui-radio-group',
        vertical: props.vertical ? 'vertical' : '',
        className: props.className ? props.className : ''
    }

    const isChecked = () => {
        for (let i = 0; i < props.options.length; i++) {
            if (props.options[i] === props.value) return i;
        }
        return -1;
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.options.map((item, index) => 
                <Radio 
                    key={index}
                    color={props.color}
                    disabled={props.disabled}
                    size={props.size}
                    label={props.labelName ? props.labelName : item} 
                    value={isChecked() === index ? props.value : ''} 
                    name={props.name}
                    onChange={() => props.onChange(item)}/>
            )}
        </div>
    )
}
RadioGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    onChange: PropTypes.func,
    vertical: PropTypes.bool,
    className: PropTypes.string
}
export default RadioGroup;