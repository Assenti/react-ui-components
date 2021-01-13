import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const Checkbox = (props) => {
    let className = {
        checkbox: 'rui-checkbox',
        fill: props.fill ? 'fill' : '',
        size: props.size ? props.size : '',
        color: props.color ? props.color : 'primary',
        disabled: props.disabled ? 'disabled' : ''
    }

    const checkboxLabelClass = () => {
        let result = '';
        let className = {
            checkbox: 'rui-checkbox-label',
            color: props.color ? props.color : '', 
            disabled: props.disabled ? 'disabled' : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={props.className ? 
                `rui-checkbox-wrapper ${props.className}` : 
                'rui-checkbox-wrapper'}>
            <label className={strinfigyClassObject(className)}>
                <input
                    type="checkbox"
                    checked={props.checked ? props.checked : false}
                    disabled={props.disabled ? props.disabled : false}
                    onChange={(e) => props.onChange ? props.onChange(e) : {}}/>
                <span></span>
            </label>
            {props.label ? <div className={checkboxLabelClass()} 
                    onClick={() => props.onChange && !props.disabled ? props.onChange() : {}}>{props.label}</div> : ''}
        </div>
    )
}
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    fill: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error','secondary']),
    size: PropTypes.oneOf(['default','medium','large']),
    label: PropTypes.string,
    className: PropTypes.string
}
export default Checkbox;