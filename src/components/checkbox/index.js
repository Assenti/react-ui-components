import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    const checkboxClass = () => {
        let result = '';
        let className = {
            checkbox: 'rui-checkbox',
            size: props.size ? props.size : '',
            color: props.color ? props.color : '',
            disabled: props.disabled ? 'disabled' : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
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
            <label className={checkboxClass()}>
                <input
                    type="checkbox"
                    checked={props.checked ? props.checked : false}
                    disabled={props.disabled ? props.disabled : false}
                    onChange={(e) => props.onChange ? props.onChange(e) : {}}/>
                <span></span>
            </label>
            {props.label ? <div className={checkboxLabelClass()} 
                    onClick={() => props.onChange ? props.onChange() : {}}>{props.label}</div> : ''}
        </div>
    )
}
Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error','secondary']),
    size: PropTypes.oneOf(['medium','large']),
    label: PropTypes.string,
    className: PropTypes.string
}
export default Checkbox;