import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Progress = (props) => {
    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-progress__container',
            circle: props.circle ? 'circle' : '',
            active: props.active ? 'active' : '',
            dark: props.dark ? 'dark' : '',
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

    const sizeParams = () => {
        if (props.size && props.size !== 'default') {
            if (props.size === 'medium') return {
                radius: 50,
                stroke: 7,
                iconSize: 28,
            };
            else if (props.size === 'large') return {
                radius: 60,
                stroke: 9,
                iconSize: 34,
            };
        } else {
            return {
                radius: 40,
                stroke: 5.5,
                iconSize: 22,
            };
        }
    }

    const colorParams = () => {
        if (props.iconColor) {
            return props.iconColor;
        } else {
            switch (props.color) {
                case 'info':
                    return '#42a5f5';
                case 'success':
                    return '#1aaa55';
                case 'error':
                    return '#f44336';
                default:
                    return '#1678c2';
            }
        }
    }

    const getCompletion = () => {
        return props.complete ? props.complete : 0
    }

    const convertToDeg = (percent) => {
        return 360 * percent / 100
    }

    const Circle = () => {
        const { complete } = props;
        const radius = props.radius ? props.radius : sizeParams().radius
        const stroke = props.stroke ? props.stroke : sizeParams().stroke
        const normalizedRadius = radius - stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeComplete = circumference - complete / 100 * circumference;
        const strokeRemain = circumference - (100 - complete) / 100 * circumference;
        const remainPercent = strokeRemain * 100 / circumference;
        return (
            <svg
              height={radius * 2}
              width={radius * 2}>
              <circle
                className="circle"
                strokeWidth={stroke}
                strokeDasharray={ circumference + ' ' + circumference }
                style={{ 
                    strokeDashoffset: strokeComplete,
                    transform: `rotate(-90deg)`
                }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}/>
                <circle
                    className="circle-remain"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ 
                        strokeDashoffset: strokeRemain,
                        transform: `rotate(${-90 + convertToDeg(remainPercent)}deg)`
                    }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}/>
            </svg>
        );
    }

    return (
        <div className={componentClass()}>
            {!props.circle ?
                <>
                    <div className="rui-progress" style={{ width: props.width ? props.width : 250 }}>
                        <div className="rui-progress__complete" style={{ width: `${getCompletion()}%` }}></div>
                    </div>
                    {!props.hideState && !props.icon ?
                        <div className="rui-progress__state">
                            {props.complete ? props.complete : 0}
                            <small>%</small>
                        </div> : ''}
                    {props.icon ? 
                        <Icon
                            className="ml-5" 
                            name={props.icon} 
                            color={colorParams()} 
                            size={sizeParams().iconSize}/> : ''}
                </> :
                <>
                    <Circle/>
                    {!props.hideState && !props.icon ? 
                        <div className="rui-progress__state circle">
                            {props.complete ? props.complete : 0}
                            <small>%</small>
                        </div> : ''}
                    {props.icon ? 
                        <Icon
                            className="circle" 
                            name={props.icon} 
                            color={colorParams()}/> : ''}
                </> 
            }
        </div>
    )
}
Progress.propTypes = {
    complete: PropTypes.number.isRequired,
    circle: PropTypes.bool,
    active: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','default','primary','info','success','error']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    radius: PropTypes.number,
    stroke: PropTypes.number,
    dark: PropTypes.bool,
    hideState: PropTypes.bool,
    className: PropTypes.string
}
export default Progress;