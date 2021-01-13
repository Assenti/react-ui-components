import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toFinancial } from '../index';
import { strinfigyClassObject } from '../utils';

const Statistics = (props) => {
    const [value, setValue] = useState(0);
    const interval = props.interval ? props.interval : 30;
    const step = props.step ? props.step : 10;
    let className = {
        name: 'rui-statistics',
        dark: props.dark ? 'dark' : '',
        align: props.align ? props.align : '',
        className: props.className ? props.className : ''
    }

    const getValue = (v) => {
        if (props.fractions) {
            let number = v.toFixed(props.fractions);
            const [integer, fraction] = number.split('.');
            if (props.financial) {
                return (<>{toFinancial(integer)}<small>.{fraction}</small></>)
            } else return (<>{integer}<small>.{fraction}</small></>)
        } else {
            if (props.financial) {
                return toFinancial(v)
            } else return v
        }
    }

    useEffect(() => {
        if (props.autoFill) {
            setTimeout(() => {
                if (value < props.value) {
                    if (step > props.value) {
                        setValue(props.value)
                    } else setValue(value + step)
                } else if (value === props.value) {
                    if (props.onDone) props.onDone()
                }
            }, interval)
        } else {
            setValue(props.value)
        }
    },[value])

    return (
        <div className={strinfigyClassObject(className)}
            style={props.style}>
            {!!props.title && <div className="rui-statistics-title">{props.title}</div>}
            <div className="rui-statistics-value-group">
                {props.prefix}
                <div 
                    className={props.prefix || props.suffix ? 'rui-statistics-value padding' : 'rui-statistics-value'}
                    style={{
                        fontSize: props.valueSize ? props.valueSize : '',
                        color: props.valueColor? props.valueColor : ''
                    }}>{getValue(value)}</div>
                {props.suffix}
            </div>
        </div>
    )
}
Statistics.propTypes = {
    title: PropTypes.node,
    value: PropTypes.number.isRequired,
    valueSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    valueColor: PropTypes.string,
    interval: PropTypes.number,
    onDone: PropTypes.func,
    autoFill: PropTypes.bool,
    step: PropTypes.number,
    dark: PropTypes.bool,
    prefix: PropTypes.node,
    financial: PropTypes.bool,
    align: PropTypes.oneOf(['center','bottom','top']),
    suffix: PropTypes.node,
    fractions: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
}
export default Statistics;