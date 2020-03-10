import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => {
    const radioClass = () => {
        let result = '';
        let className = {
            name: 'rui-radio',
            color: props.color ? props.color : 'primary',
            size: props.size && props.size !== 'default' ? props.size : '',
            disabled: props.disabled ? 'disabled' : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <label className={radioClass()}>
            <input
                type="radio" 
                name={props.name} 
                value={props.value}
                // defaultChecked={props.value}
                disabled={props.disabled} 
                onChange={e => props.onChange(e)}/>
                <span className="rui-radio-checkmark"></span>
            {props.label}
        </label>
    )
}

const RadioGroup = (props) => {
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
                    color={props.color}
                    disabled={props.disabled}
                    size={props.size}
                    label={props.labelName ? props.labelName : item} 
                    value={props.value} 
                    name={props.name}
                    onChange={() => props.onChange(item)}/>
            )}
        </div>
    )
}
RadioGroup.propTypes = {
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(undefined,'','primary','info','success','error'),
    size: PropTypes.oneOf([undefined,'','medium','large']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    onChange: PropTypes.func,
    vertical: PropTypes.bool,
    className: PropTypes.string
}
export default RadioGroup;