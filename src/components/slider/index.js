import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject, Button, Icon } from '../index';

const Slider = (props) => {
    const childItem = useRef();
    const childItems = useRef();
    const slider = useRef();
    const [move, setMove] = useState(0);
    const [remainder, setRemainder] = useState('')
    let className = {
        name: 'rui-slider',
        slidable: props.slidable ? 'slidable' : '',
        vertical: props.vertical ? 'vertical' : '',
        className: props.className ? props.className : ''
    }

    const handlePrev = () => {
        let length = props.vertical ? childItem.current.offsetHeight : childItem.current.offsetWidth;
        setMove(move + length);
        setRemainder(remainder + Math.abs(length));
    }
    
    const handleNext = () => {
        if (remainder >= 0) {
            let length = props.vertical ? childItem.current.offsetHeight : childItem.current.offsetWidth;
            setMove(move - length);
            setRemainder(remainder - Math.abs(length));
        }
    }

    const getSliderLength = () => {
        if (props.length && props.vertical) {
            return { height: props.length ? props.length : ''}
        } else if (props.length && !props.vertical) {
            return { width: props.length ? props.length : ''}
        }
    }

    useEffect(() => {
        if (slider.current && childItems.current) {
            let itemsLength = props.vertical ? childItems.current.offsetHeight : childItems.current.offsetWidth;
            let sliderLength = props.vertical ? slider.current.offsetHeight : slider.current.offsetWidth;
            setRemainder(itemsLength - sliderLength);
        }
    }, [])

    return (
        <div className={strinfigyClassObject(className)} 
            style={getSliderLength()}
            ref={slider}>
            {!props.slidable && 
            <Button
                onClick={handlePrev}
                disabled={move === 0}
                dark={props.dark}
                className="rui-slider-prev-btn"
                icon={<Icon name={props.vertical ? 'chevron-up' : 'chevron-back'}/>}/>}
            <div className="rui-slider-items" 
                style={{ transform: props.vertical ? `translateY(${move}px)` : `translateX(${move}px)` }}
                ref={childItems}>
                {props.items.map((item, index) => 
                    <div 
                        key={index} 
                        className="rui-slider-item"
                        ref={childItem} 
                        onClick={() => props.onItemClick ? props.onItemClick(item, index) : {}}>
                        {props.render(item, index)}
                    </div> 
                )}
            </div>
            {!props.slidable ? <Button
                onClick={handleNext}
                disabled={remainder <= 0}
                dark={props.dark}
                className="rui-slider-next-btn"
                icon={<Icon name={props.vertical ? 'chevron-down' : 'chevron-next'}/>}/> : null}
        </div>
    )
}
Slider.propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
    length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onItemClick: PropTypes.func,
    slidable: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string
}
export default Slider;