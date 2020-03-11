import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Rating = (props) => {
    const makeArray = (count) => {
        let arr = []
        if (count % Math.floor(count) === 0 || isNaN(count % Math.floor(count))) {
            for (let i = 0; i < count; i++) {
                arr.push(1);
            }
        } else {
            for (let i = 0; i < count-1; i++) {
                arr.push(1);
            }
            arr.push(0.5)
        }
        return arr;
    }
    
    const [selected, setSelected] = useState(props.rate ? makeArray(props.rate) : []);

    const ratingClass = () => {
        let result = '';
        let className = {
            name: 'rui-rating',
            color: props.color ? props.color : 'yellow',
            disabled: props.disabled ? 'disabled' : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const getName = (item) => {
        if (item === 1) return 'star';
        else if (item === 0.5) return 'star-half-full';
        else return 'star-outline';
    }

    const handleClick = (item, index) => {
        if (!props.disabled) props.onChange(index+1)
    }

    const stars = () => makeArray(props.count ? props.count : 5);

    useEffect(() => {
        setSelected(makeArray(props.rate))
    }, [props.rate])

    return (
        <div className={ratingClass()}>
            <div className="rui-rating__stars">
                {stars().map((item, index) =>
                    <Icon
                        onClick={() => handleClick(item, index)} 
                        key={index}
                        size={props.size}
                        name={getName(selected[index])}/>
                )}
            </div>
            {!props.hideRate ? <div className="rui-rating__rate">
                {props.text ? props.text + ': ' : ''}
                <strong>{props.rate ? props.rate : selected.length}</strong>
            </div> : ''}
        </div>
    )
}
Rating.propTypes = {
    hideRate: PropTypes.bool,
    size: PropTypes.number,
    rate: PropTypes.number,
    count: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    text: PropTypes.string,
    color: PropTypes.oneOf([undefined,'','yellow', 'primary', 'info', 'success', 'error']),
    className: PropTypes.string
}
Rating.defaultProps = {
    color: 'yellow',
    size: 24
}
export default Rating;