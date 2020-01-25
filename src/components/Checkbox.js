import React from 'react';

export const Checkbox = (props) => {

    const checkboxClass = () => {
        let result = '';
        let className = {
            checkbox: 'checkbox',
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
            checkbox: 'checkbox-label',
            color: props.color ? props.color : '', 
            className: props.className ? props.className : '',
            disabled: props.disabled ? 'disabled' : ''
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className="checkbox-wrapper">
            <label className={checkboxClass()}>
                <input
                    type="checkbox"
                    checked={props.checked ? props.checked : false}
                    disabled={props.disabled ? props.disabled : false}
                    onChange={(e) => props.onChange(e)}/>
                <span></span>
            </label>
            {props.label ? <div className={checkboxLabelClass()} 
                    onClick={() => props.onChange()}>{props.label}</div> : ''}
        </div>
    )
}
