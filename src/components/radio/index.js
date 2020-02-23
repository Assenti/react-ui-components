import React from 'react';

const Radio = (props) => {
    const radioClass = () => {
        let result = '';
        let className = {
            name: 'rui-radio',
            disabled: props.disabled ? 'disabled' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={radioClass()}>
            <input 
                type="radio" 
                name={props.name} 
                value={props.value}
                disabled={props.disabled} 
                onChange={e => props.onChange(e)}/>
            {props.label ? <span>{props.label}</span> : ''}
        </div>
    )
}

export const RadioGroup = (props) => {
    const radioGroupClass = () => {
        let result = '';
        let className = {
            btn: 'rui-radio-group',
            vertical: props.vertical ? 'vertical' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={radioGroupClass()}>
            {props.options.map((item, index) => 
                <Radio 
                    key={index}
                    disabled={props.disabled}
                    label={props.labelName ? props.labelName : item} 
                    value={item} 
                    name={props.name}
                    onChange={() => props.onChange(item)}/>
            )}
        </div>
    )
}
